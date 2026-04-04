import { Response } from "express";
import mongoose from "mongoose";
import { AuthRequest } from "../middleware/auth.middleware.ts";
import { CheckIn, WorkoutSession } from "../models/progress.model.ts";
import Workout from "../models/workout.model.ts";
import User from "../models/user.model.ts";
import type {
  CheckInInput,
  WorkoutSessionInput,
  HistoryQuery,
} from "../schemas/progress.schema.ts";

// ─── Check-Ins ────────────────────────────────────────────────────────────────

export const logCheckIn = async (req: AuthRequest, res: Response) => {
  try {
    const { date, weight, bodyFat, notes } = req.body as CheckInInput;
    const userId = new mongoose.Types.ObjectId(req.userId);

    // Fetch current active plans to snapshot them
    const user = await User.findById(userId).select(
      "activeDietId activeWorkoutId",
    );
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const checkIn = await CheckIn.create({
      userId,
      date,
      weight,
      bodyFat,
      notes,
      activeDietId: user.activeDietId ?? null,
      activeWorkoutId: user.activeWorkoutId ?? null,
    });

    res.status(201).json({ message: "Check-in logged", checkIn });
  } catch (error) {
    console.error("logCheckIn error:", error);
    res.status(500).json({ message: "Failed to log check-in" });
  }
};

export const getCheckInHistory = async (req: AuthRequest, res: Response) => {
  try {
    const { limit, skip } = (req as AuthRequest & { parsedQuery: HistoryQuery })
      .parsedQuery;

    const checkIns = await CheckIn.find({ userId: req.userId })
      .sort({ date: -1 })
      .skip(skip)
      .limit(limit)
      .populate("activeDietId", "name goal type calories")
      .populate("activeWorkoutId", "name level goal daysPerWeek");

    const total = await CheckIn.countDocuments({ userId: req.userId });

    res.json({ total, limit, skip, checkIns });
  } catch (error) {
    console.error("getCheckInHistory error:", error);
    res.status(500).json({ message: "Failed to fetch check-in history" });
  }
};

export const deleteCheckIn = async (req: AuthRequest, res: Response) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      res.status(400).json({ message: "Invalid check-in ID" });
      return;
    }

    const checkIn = await CheckIn.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });

    if (!checkIn) {
      res.status(404).json({ message: "Check-in not found" });
      return;
    }

    res.json({ message: "Check-in deleted" });
  } catch (error) {
    console.error("deleteCheckIn error:", error);
    res.status(500).json({ message: "Failed to delete check-in" });
  }
};

// ─── Workout Sessions ─────────────────────────────────────────────────────────

export const logWorkoutSession = async (req: AuthRequest, res: Response) => {
  try {
    const { workoutId, dayCompleted, completedAt, durationMinutes, notes } =
      req.body as WorkoutSessionInput;

    if (!mongoose.isValidObjectId(workoutId)) {
      res.status(400).json({ message: "Invalid workoutId" });
      return;
    }

    const workout = await Workout.findById(workoutId).select("schedule name");
    if (!workout) {
      res.status(404).json({ message: "Workout not found" });
      return;
    }

    // Validate that dayCompleted exists in the workout's schedule
    const validDays = workout.schedule.map((d) => d.day);
    if (!validDays.includes(dayCompleted)) {
      res.status(400).json({
        message: `Invalid day. Valid days for this workout: ${validDays.join(", ")}`,
      });
      return;
    }

    const session = await WorkoutSession.create({
      userId: req.userId,
      workoutId,
      dayCompleted,
      completedAt,
      durationMinutes,
      notes,
    });

    res.status(201).json({ message: "Session logged", session });
  } catch (error) {
    console.error("logWorkoutSession error:", error);
    res.status(500).json({ message: "Failed to log workout session" });
  }
};

export const getWorkoutSessionHistory = async (
  req: AuthRequest,
  res: Response,
) => {
  try {
    const { limit, skip } = (req as AuthRequest & { parsedQuery: HistoryQuery })
      .parsedQuery;

    const sessions = await WorkoutSession.find({ userId: req.userId })
      .sort({ completedAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate("workoutId", "name level goal daysPerWeek split");

    const total = await WorkoutSession.countDocuments({ userId: req.userId });

    res.json({ total, limit, skip, sessions });
  } catch (error) {
    console.error("getWorkoutSessionHistory error:", error);
    res.status(500).json({ message: "Failed to fetch session history" });
  }
};

export const deleteWorkoutSession = async (req: AuthRequest, res: Response) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      res.status(400).json({ message: "Invalid session ID" });
      return;
    }

    const session = await WorkoutSession.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });

    if (!session) {
      res.status(404).json({ message: "Session not found" });
      return;
    }

    res.json({ message: "Session deleted" });
  } catch (error) {
    console.error("deleteWorkoutSession error:", error);
    res.status(500).json({ message: "Failed to delete session" });
  }
};

// ─── Combined Summary ─────────────────────────────────────────────────────────

export const getProgressSummary = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.userId;

    // Run all queries in parallel
    const [
      user,
      totalSessions,
      totalCheckIns,
      recentSessions,
      recentCheckIns,
      latestCheckIn,
      firstCheckIn,
    ] = await Promise.all([
      User.findById(userId)
        .select("name activeDietId activeWorkoutId tracking createdAt")
        .populate("activeDietId", "name goal type calories macros")
        .populate("activeWorkoutId", "name level goal daysPerWeek split"),
      WorkoutSession.countDocuments({ userId }),
      CheckIn.countDocuments({ userId }),
      // Last 7 sessions
      WorkoutSession.find({ userId })
        .sort({ completedAt: -1 })
        .limit(7)
        .populate("workoutId", "name level goal"),
      // Last 7 check-ins
      CheckIn.find({ userId }).sort({ date: -1 }).limit(7),
      // Most recent check-in for current stats
      CheckIn.findOne({ userId }).sort({ date: -1 }),
      // First ever check-in for baseline
      CheckIn.findOne({ userId }).sort({ date: 1 }),
    ]);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // ── Workout streak calculation ────────────────────────────────────────────
    // A streak is consecutive calendar days with at least one session
    const allSessions = await WorkoutSession.find({ userId })
      .sort({ completedAt: -1 })
      .select("completedAt");

    const streak = calculateStreak(allSessions.map((s) => s.completedAt));

    // ── Weight progress ───────────────────────────────────────────────────────
    let weightProgress: {
      start: number | null;
      current: number | null;
      change: number | null;
    } = { start: null, current: null, change: null };

    if (firstCheckIn?.weight != null && latestCheckIn?.weight != null) {
      const change =
        Math.round((latestCheckIn.weight - firstCheckIn.weight) * 10) / 10;
      weightProgress = {
        start: firstCheckIn.weight,
        current: latestCheckIn.weight,
        change,
      };
    }

    // ── Diet assignment count ─────────────────────────────────────────────────
    const totalDietAssignments = user.tracking.dietLog.length;
    const totalWorkoutAssignments = user.tracking.workoutLog.length;

    res.json({
      user: {
        name: user.name,
        memberSince: user.createdAt,
        activeDiet: user.activeDietId,
        activeWorkout: user.activeWorkoutId,
      },
      workout: {
        totalSessions,
        currentStreak: streak.current,
        longestStreak: streak.longest,
        recentSessions,
        totalPlansAssigned: totalWorkoutAssignments,
      },
      diet: {
        totalCheckIns,
        totalPlansAssigned: totalDietAssignments,
        recentCheckIns,
        weightProgress,
        latestBodyFat: latestCheckIn?.bodyFat ?? null,
      },
      combined: {
        totalActiveDays: totalSessions,
        // Days where user had BOTH a workout session and a check-in — shows commitment
        overlapDays: await getOverlapDays(userId!),
      },
    });
  } catch (error) {
    console.error("getProgressSummary error:", error);
    res.status(500).json({ message: "Failed to fetch progress summary" });
  }
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function calculateStreak(dates: Date[]): {
  current: number;
  longest: number;
} {
  if (dates.length === 0) return { current: 0, longest: 0 };

  // Deduplicate to calendar days (YYYY-MM-DD strings)
  const uniqueDays = [
    ...new Set(dates.map((d) => d.toISOString().split("T")[0])),
  ].sort((a, b) => (a > b ? -1 : 1)); // most recent first

  let current = 0;
  let longest = 0;
  let streak = 1;

  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

  // Current streak: must have worked out today or yesterday to be active
  if (uniqueDays[0] === today || uniqueDays[0] === yesterday) {
    current = 1;
    for (let i = 1; i < uniqueDays.length; i++) {
      const prev = new Date(uniqueDays[i - 1]);
      const curr = new Date(uniqueDays[i]);
      const diffDays = Math.round((prev.getTime() - curr.getTime()) / 86400000);
      if (diffDays === 1) {
        current++;
      } else {
        break;
      }
    }
  }

  // Longest streak: scan the full history
  for (let i = 1; i < uniqueDays.length; i++) {
    const prev = new Date(uniqueDays[i - 1]);
    const curr = new Date(uniqueDays[i]);
    const diffDays = Math.round((prev.getTime() - curr.getTime()) / 86400000);
    if (diffDays === 1) {
      streak++;
    } else {
      longest = Math.max(longest, streak);
      streak = 1;
    }
  }
  longest = Math.max(longest, streak);

  return { current, longest };
}

async function getOverlapDays(userId: string): Promise<number> {
  // Days where user had at least one session AND at least one check-in
  const [sessionDays, checkInDays] = await Promise.all([
    WorkoutSession.find({ userId }).select("completedAt").lean(),
    CheckIn.find({ userId }).select("date").lean(),
  ]);

  const sessionDaySet = new Set(
    sessionDays.map((s) => new Date(s.completedAt).toISOString().split("T")[0]),
  );
  const checkInDaySet = new Set(
    checkInDays.map((c) => new Date(c.date).toISOString().split("T")[0]),
  );

  let overlap = 0;
  for (const day of sessionDaySet) {
    if (checkInDaySet.has(day)) overlap++;
  }

  return overlap;
}
