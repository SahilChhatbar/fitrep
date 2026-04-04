import { Response } from "express";
import mongoose from "mongoose";
import { AuthRequest } from "../middleware/auth.middleware.ts";
import { CheckIn, WorkoutSession } from "../models/progress.model.ts";
import Workout from "../models/workout.model.ts";
import User from "../models/user.model.ts";
import { toDayKey } from "../schemas/progress.schema.ts";
import type {
  CheckInInput,
  WorkoutSessionInput,
  HistoryQuery,
} from "../schemas/progress.schema.ts";

// ─── Check-Ins ────────────────────────────────────────────────────────────────

export const logCheckIn = async (req: AuthRequest, res: Response) => {
  try {
    const { date, utcOffsetMinutes, weight, bodyFat, notes } =
      req.body as CheckInInput;

    const userId = new mongoose.Types.ObjectId(req.userId);
    const dayKey = toDayKey(date, utcOffsetMinutes);

    // Fetch current active plans to snapshot them
    const user = await User.findById(userId).select(
      "activeDietId activeWorkoutId",
    );
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // ── One check-in per day: upsert on (userId, dayKey) ─────────────────────
    // If the user logs twice on the same day we update rather than reject —
    // this is friendlier UX (e.g. morning weight + evening note).
    const checkIn = await CheckIn.findOneAndUpdate(
      { userId, dayKey },
      {
        $set: {
          date,
          dayKey,
          ...(weight !== undefined && { weight }),
          ...(bodyFat !== undefined && { bodyFat }),
          ...(notes !== undefined && { notes }),
          activeDietId: user.activeDietId ?? null,
          activeWorkoutId: user.activeWorkoutId ?? null,
        },
      },
      { upsert: true, new: true, setDefaultsOnInsert: true },
    );

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

    const [checkIns, total] = await Promise.all([
      CheckIn.find({ userId: req.userId })
        .sort({ date: -1 })
        .skip(skip)
        .limit(limit)
        .populate("activeDietId", "name goal type calories")
        .populate("activeWorkoutId", "name level goal daysPerWeek"),
      CheckIn.countDocuments({ userId: req.userId }),
    ]);

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
    const {
      workoutId,
      dayCompleted,
      completedAt,
      utcOffsetMinutes,
      durationMinutes,
      notes,
    } = req.body as WorkoutSessionInput;

    if (!mongoose.isValidObjectId(workoutId)) {
      res.status(400).json({ message: "Invalid workoutId" });
      return;
    }

    const workout = await Workout.findById(workoutId).select("schedule name");
    if (!workout) {
      res.status(404).json({ message: "Workout not found" });
      return;
    }

    // Validate dayCompleted exists in the workout's schedule
    const validDays = workout.schedule.map((d) => d.day);
    if (!validDays.includes(dayCompleted)) {
      res.status(400).json({
        message: `Invalid day. Valid days for this workout: ${validDays.join(", ")}`,
      });
      return;
    }

    const dayKey = toDayKey(completedAt, utcOffsetMinutes);

    // ── One session per workout-day per calendar day: upsert ─────────────────
    // Prevents the same workout day being logged multiple times on the same
    // calendar day while still allowing updates (e.g. correcting duration).
    // A user CAN log different dayCompleted values on the same calendar day
    // (e.g. Push A and Pull on a double-session day) — only exact duplicates
    // are merged.
    const session = await WorkoutSession.findOneAndUpdate(
      { userId: req.userId, workoutId, dayCompleted, dayKey },
      {
        $set: {
          completedAt,
          dayKey,
          ...(durationMinutes !== undefined && { durationMinutes }),
          ...(notes !== undefined && { notes }),
        },
      },
      { upsert: true, new: true, setDefaultsOnInsert: true },
    );

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

    const [sessions, total] = await Promise.all([
      WorkoutSession.find({ userId: req.userId })
        .sort({ completedAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate("workoutId", "name level goal daysPerWeek split"),
      WorkoutSession.countDocuments({ userId: req.userId }),
    ]);

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
    const userId = req.userId!;

    // ── Parallel fetch with a safety timeout ─────────────────────────────────
    const TIMEOUT_MS = 8_000;
    const withTimeout = <T>(p: Promise<T>): Promise<T> =>
      Promise.race([
        p,
        new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error("DB query timeout")), TIMEOUT_MS),
        ),
      ]);

    const [
      user,
      totalSessions,
      totalCheckIns,
      recentSessions,
      recentCheckIns,
      latestCheckIn,
      firstCheckIn,
      // Pull ALL dayKeys in one lean query each — used for streak + overlap
      allSessionDayKeys,
      allCheckInDayKeys,
    ] = await withTimeout(
      Promise.all([
        User.findById(userId)
          .select("name activeDietId activeWorkoutId tracking createdAt")
          .populate("activeDietId", "name goal type calories macros")
          .populate("activeWorkoutId", "name level goal daysPerWeek split"),

        WorkoutSession.countDocuments({ userId }),
        CheckIn.countDocuments({ userId }),

        // Last 7 sessions for the "recent activity" feed
        WorkoutSession.find({ userId })
          .sort({ completedAt: -1 })
          .limit(7)
          .populate("workoutId", "name level goal"),

        // Last 7 check-ins for the "recent check-ins" feed
        CheckIn.find({ userId }).sort({ date: -1 }).limit(7),

        CheckIn.findOne({ userId })
          .sort({ date: -1 })
          .select("weight bodyFat date"),
        CheckIn.findOne({ userId })
          .sort({ date: 1 })
          .select("weight bodyFat date"),

        // Lean distinct dayKeys for streak + overlap — no full doc hydration
        WorkoutSession.find({ userId })
          .select("dayKey")
          .lean<{ dayKey: string }[]>(),

        CheckIn.find({ userId }).select("dayKey").lean<{ dayKey: string }[]>(),
      ]),
    );

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // ── Deduplicated day sets ─────────────────────────────────────────────────
    const sessionDaySet = new Set(allSessionDayKeys.map((s) => s.dayKey));
    const checkInDaySet = new Set(allCheckInDayKeys.map((c) => c.dayKey));

    // ── Workout streak (uses session dayKeys) ─────────────────────────────────
    const streak = calculateStreak(sessionDaySet);

    // ── Distinct active days (unique calendar days with ≥1 session) ──────────
    // Previously this was `totalSessions` which was wrong — e.g. 3 sessions in
    // one day counted as 3 "active days".
    const totalActiveDays = sessionDaySet.size;

    // ── Overlap days (days with BOTH a session AND a check-in) ───────────────
    // Reuses already-fetched sets — no extra DB round-trip.
    let overlapDays = 0;
    for (const day of sessionDaySet) {
      if (checkInDaySet.has(day)) overlapDays++;
    }

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

    // ── Average session duration (only sessions that recorded it) ────────────
    const avgDurationResult = await WorkoutSession.aggregate<{
      avg: number;
    }>([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(userId),
          durationMinutes: { $exists: true },
        },
      },
      { $group: { _id: null, avg: { $avg: "$durationMinutes" } } },
    ]);
    const avgSessionDuration =
      avgDurationResult[0]?.avg != null
        ? Math.round(avgDurationResult[0].avg)
        : null;

    // ── Plan assignment counts ────────────────────────────────────────────────
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
        totalActiveDays, // distinct calendar days with ≥1 session
        currentStreak: streak.current,
        longestStreak: streak.longest,
        avgSessionDurationMinutes: avgSessionDuration,
        recentSessions,
        totalPlansAssigned: totalWorkoutAssignments,
      },
      diet: {
        totalCheckIns,
        totalCheckInDays: checkInDaySet.size, // distinct days with a check-in
        totalPlansAssigned: totalDietAssignments,
        recentCheckIns,
        weightProgress,
        latestBodyFat: latestCheckIn?.bodyFat ?? null,
        latestCheckInDate: latestCheckIn?.date ?? null,
      },
      combined: {
        // Days the user both worked out AND checked in — commitment metric
        overlapDays,
        // Ratio: what fraction of workout days did they also check in?
        checkInConsistency:
          totalActiveDays > 0
            ? Math.round((overlapDays / totalActiveDays) * 100)
            : 0,
      },
    });
  } catch (error) {
    console.error("getProgressSummary error:", error);
    res.status(500).json({ message: "Failed to fetch progress summary" });
  }
};

// ─── Streak helper ────────────────────────────────────────────────────────────

/**
 * Given a Set of "YYYY-MM-DD" dayKeys, compute current and longest streaks.
 *
 * Rules:
 * - A streak is consecutive calendar days (no gap > 1 day).
 * - The current streak is still alive if the user worked out TODAY or YESTERDAY
 *   (grace period so a streak isn't killed the moment midnight passes).
 * - Uses the dayKeys as stored — which are already in the user's local timezone
 *   thanks to `toDayKey(date, utcOffsetMinutes)`.
 */
function calculateStreak(daySet: Set<string>): {
  current: number;
  longest: number;
} {
  if (daySet.size === 0) return { current: 0, longest: 0 };

  // Sort descending (most recent first)
  const days = [...daySet].sort((a, b) => (a > b ? -1 : 1));

  const todayUTC = new Date().toISOString().split("T")[0];
  const yesterdayUTC = new Date(Date.now() - 86_400_000)
    .toISOString()
    .split("T")[0];

  // ── Current streak ────────────────────────────────────────────────────────
  let current = 0;
  if (days[0] === todayUTC || days[0] === yesterdayUTC) {
    current = 1;
    for (let i = 1; i < days.length; i++) {
      const gap = daysBetween(days[i], days[i - 1]);
      if (gap === 1) {
        current++;
      } else {
        break;
      }
    }
  }

  // ── Longest streak ────────────────────────────────────────────────────────
  let longest = 0;
  let run = 1;
  for (let i = 1; i < days.length; i++) {
    const gap = daysBetween(days[i], days[i - 1]);
    if (gap === 1) {
      run++;
    } else {
      longest = Math.max(longest, run);
      run = 1;
    }
  }
  longest = Math.max(longest, run);

  // current streak also counts as a candidate for longest
  longest = Math.max(longest, current);

  return { current, longest };
}

/**
 * Returns the number of calendar days between two YYYY-MM-DD strings.
 * `earlier` should be the older date, `later` the more recent one.
 * Using explicit UTC parsing avoids DST shifting issues.
 */
function daysBetween(earlier: string, later: string): number {
  const msPerDay = 86_400_000;
  const e = Date.UTC(
    +earlier.slice(0, 4),
    +earlier.slice(5, 7) - 1,
    +earlier.slice(8, 10),
  );
  const l = Date.UTC(
    +later.slice(0, 4),
    +later.slice(5, 7) - 1,
    +later.slice(8, 10),
  );
  return Math.round((l - e) / msPerDay);
}
