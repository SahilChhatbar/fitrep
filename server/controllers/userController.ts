import { Response } from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import User from "../models/user.model.ts";
import Diet from "../models/diet.model.ts";
import Workout from "../models/workout.model.ts";
import { AuthRequest } from "../middleware/auth.middleware.ts";
import { fetchProgressSummaryForUser } from "./progressController.ts";
import type {
  SignupInput,
  LoginInput,
  AssignDietInput,
  AssignWorkoutInput,
  AssignCoachInput,
} from "../schemas/user.schema.ts";

const signToken = (userId: string, role: string) => {
  const secret = process.env.JWT_SECRET!;
  return jwt.sign({ userId, role }, secret, {
    expiresIn: process.env.JWT_EXPIRES_IN ?? "7d",
  } as jwt.SignOptions);
};

// ─── Coaches List (Public) ───────────────────────────────────────────────────

export const getCoaches = async (_req: AuthRequest, res: Response) => {
  try {
    const coaches = await User.find({ role: "coach" })
      .select("_id name email")
      .sort({ name: 1 });
    res.json(coaches);
  } catch (error) {
    console.error("getCoaches error:", error);
    res.status(500).json({ message: "Failed to fetch coaches" });
  }
};

// ─── Auth ─────────────────────────────────────────────────────────────────────

export const signup = async (req: AuthRequest, res: Response) => {
  try {
    const { name, email, password, role, coachId } = req.body as SignupInput;

    const existing = await User.findOne({ email });
    if (existing) {
      res.status(409).json({ message: "Email already in use" });
      return;
    }

    let validCoachId: mongoose.Types.ObjectId | null = null;
    if (coachId && mongoose.isValidObjectId(coachId)) {
      const coach = await User.findOne({ _id: coachId, role: "coach" });
      if (coach) {
        validCoachId = coach._id as mongoose.Types.ObjectId;
      }
    }

    const user = await User.create({
      name,
      email,
      password,
      role: role || "user",
      coachId: validCoachId,
    });
    const token = signToken(String(user._id), user.role);

    const populatedUser = await User.findById(user._id)
      .populate("coachId", "name email")
      .populate("activeDietId", "name goal type calories")
      .populate("activeWorkoutId", "name level goal daysPerWeek split");

    res.status(201).json({ token, user: populatedUser || user });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Signup failed" });
  }
};

export const login = async (req: AuthRequest, res: Response) => {
  try {
    const { identifier, password, role } = req.body as LoginInput;

    const user = await User.findOne({
      $or: [
        { email: identifier.toLowerCase() },
        { name: identifier },
      ],
    })
      .populate("coachId", "name email")
      .populate("activeDietId", "name goal type calories")
      .populate("activeWorkoutId", "name level goal daysPerWeek split")
      .select("+password");

    if (!user || !(await user.comparePassword(password))) {
      res.status(401).json({ message: "Invalid email or password" });
      return;
    }

    const userRole = user.role || "user";
    if (role && userRole !== role) {
      const actualRoleLabel = userRole === "coach" ? "Coach" : "User / Trainee";
      res.status(400).json({
        message: `Account is registered as a ${actualRoleLabel}. Please switch to "Sign in as ${actualRoleLabel}".`,
      });
      return;
    }

    const token = signToken(String(user._id), user.role);

    const userObj = user.toJSON();
    res.json({ token, user: userObj });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed" });
  }
};

// ─── Profile & Coach Assignment ───────────────────────────────────────────────

export const getMe = async (req: AuthRequest, res: Response) => {
  try {
    const user = await User.findById(req.userId)
      .populate("coachId", "name email")
      .populate("activeDietId", "name goal type calories")
      .populate("activeWorkoutId", "name level goal daysPerWeek split");

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.json(user);
  } catch (error) {
    console.error("getMe error:", error);
    res.status(500).json({ message: "Failed to fetch profile" });
  }
};

export const assignCoach = async (req: AuthRequest, res: Response) => {
  try {
    const { coachId } = req.body as AssignCoachInput;

    let targetCoachId: mongoose.Types.ObjectId | null = null;
    if (coachId && coachId !== "none" && mongoose.isValidObjectId(coachId)) {
      const coach = await User.findOne({ _id: coachId, role: "coach" });
      if (!coach) {
        res.status(404).json({ message: "Coach not found" });
        return;
      }
      targetCoachId = coach._id as mongoose.Types.ObjectId;
    }

    const user = await User.findByIdAndUpdate(
      req.userId,
      { coachId: targetCoachId },
      { new: true },
    )
      .populate("coachId", "name email")
      .populate("activeDietId", "name goal type calories")
      .populate("activeWorkoutId", "name level goal daysPerWeek split");

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.json({ message: "Coach updated successfully", user });
  } catch (error) {
    console.error("assignCoach error:", error);
    res.status(500).json({ message: "Failed to update coach" });
  }
};

// ─── Coach Role Actions (Client Oversight) ───────────────────────────────────

export const getCoachClients = async (req: AuthRequest, res: Response) => {
  try {
    let role = req.userRole;
    if (!role) {
      const u = await User.findById(req.userId);
      role = u?.role;
    }
    if (role !== "coach") {
      res.status(403).json({ message: "Only coaches can view clients" });
      return;
    }

    const clients = await User.find({ coachId: req.userId })
      .select("name email role activeDietId activeWorkoutId createdAt updatedAt")
      .populate("activeDietId", "name goal type calories")
      .populate("activeWorkoutId", "name level goal daysPerWeek split")
      .sort({ name: 1 });

    res.json(clients);
  } catch (error) {
    console.error("getCoachClients error:", error);
    res.status(500).json({ message: "Failed to fetch clients" });
  }
};

export const getCoachClientDetails = async (req: AuthRequest, res: Response) => {
  try {
    let role = req.userRole;
    if (!role) {
      const u = await User.findById(req.userId);
      role = u?.role;
    }
    if (role !== "coach") {
      res.status(403).json({ message: "Only coaches can view client details" });
      return;
    }

    const { clientId } = req.params;
    if (!mongoose.isValidObjectId(clientId)) {
      res.status(400).json({ message: "Invalid clientId" });
      return;
    }

    const client = await User.findById(clientId)
      .populate("activeDietId", "name goal type calories macros")
      .populate("activeWorkoutId", "name level goal daysPerWeek split schedule")
      .populate("tracking.dietLog.dietId", "name goal type calories")
      .populate("tracking.workoutLog.workoutId", "name level goal daysPerWeek split");

    if (!client) {
      res.status(404).json({ message: "Client not found" });
      return;
    }

    if (String(client.coachId) !== String(req.userId)) {
      res.status(403).json({ message: "You are not assigned to this client" });
      return;
    }

    res.json(client);
  } catch (error) {
    console.error("getCoachClientDetails error:", error);
    res.status(500).json({ message: "Failed to fetch client details" });
  }
};

export const getCoachClientProgress = async (req: AuthRequest, res: Response) => {
  try {
    let role = req.userRole;
    if (!role) {
      const u = await User.findById(req.userId);
      role = u?.role;
    }
    if (role !== "coach") {
      res.status(403).json({ message: "Only coaches can view client progress" });
      return;
    }

    const { clientId } = req.params;
    if (!mongoose.isValidObjectId(clientId)) {
      res.status(400).json({ message: "Invalid clientId" });
      return;
    }

    const client = await User.findById(clientId);
    if (!client) {
      res.status(404).json({ message: "Client not found" });
      return;
    }

    if (String(client.coachId) !== String(req.userId)) {
      res.status(403).json({ message: "You are not assigned to this client" });
      return;
    }

    const progressSummary = await fetchProgressSummaryForUser(clientId);
    res.json(progressSummary);
  } catch (error) {
    console.error("getCoachClientProgress error:", error);
    res.status(500).json({ message: "Failed to fetch client progress" });
  }
};

// ─── Diet Tracking ────────────────────────────────────────────────────────────

export const assignDiet = async (req: AuthRequest, res: Response) => {
  try {
    const { dietId, note } = req.body as AssignDietInput;

    if (!mongoose.isValidObjectId(dietId)) {
      res.status(400).json({ message: "Invalid dietId" });
      return;
    }

    const diet = await Diet.findById(dietId);
    if (!diet) {
      res.status(404).json({ message: "Diet not found" });
      return;
    }

    const user = await User.findByIdAndUpdate(
      req.userId,
      {
        activeDietId: diet._id,
        $push: {
          "tracking.dietLog": {
            dietId: diet._id,
            assignedAt: new Date(),
            ...(note && { note }),
          },
        },
      },
      { new: true },
    ).populate("activeDietId", "name goal type calories");

    res.json({ message: "Diet assigned", activeDiet: user?.activeDietId });
  } catch (error) {
    console.error("assignDiet error:", error);
    res.status(500).json({ message: "Failed to assign diet" });
  }
};

export const removeDiet = async (req: AuthRequest, res: Response) => {
  try {
    await User.findByIdAndUpdate(req.userId, { activeDietId: null });
    res.json({ message: "Active diet removed" });
  } catch (error) {
    console.error("removeDiet error:", error);
    res.status(500).json({ message: "Failed to remove diet" });
  }
};

export const getDietLog = async (req: AuthRequest, res: Response) => {
  try {
    const user = await User.findById(req.userId).populate(
      "tracking.dietLog.dietId",
      "name goal type calories",
    );

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.json(user.tracking.dietLog);
  } catch (error) {
    console.error("getDietLog error:", error);
    res.status(500).json({ message: "Failed to fetch diet log" });
  }
};

// ─── Workout Tracking ─────────────────────────────────────────────────────────

export const assignWorkout = async (req: AuthRequest, res: Response) => {
  try {
    const { workoutId, note } = req.body as AssignWorkoutInput;

    if (!mongoose.isValidObjectId(workoutId)) {
      res.status(400).json({ message: "Invalid workoutId" });
      return;
    }

    const workout = await Workout.findById(workoutId);
    if (!workout) {
      res.status(404).json({ message: "Workout not found" });
      return;
    }

    const user = await User.findByIdAndUpdate(
      req.userId,
      {
        activeWorkoutId: workout._id,
        $push: {
          "tracking.workoutLog": {
            workoutId: workout._id,
            assignedAt: new Date(),
            ...(note && { note }),
          },
        },
      },
      { new: true },
    ).populate("activeWorkoutId", "name level goal daysPerWeek split");

    res.json({
      message: "Workout assigned",
      activeWorkout: user?.activeWorkoutId,
    });
  } catch (error) {
    console.error("assignWorkout error:", error);
    res.status(500).json({ message: "Failed to assign workout" });
  }
};

export const removeWorkout = async (req: AuthRequest, res: Response) => {
  try {
    await User.findByIdAndUpdate(req.userId, { activeWorkoutId: null });
    res.json({ message: "Active workout removed" });
  } catch (error) {
    console.error("removeWorkout error:", error);
    res.status(500).json({ message: "Failed to remove workout" });
  }
};

export const getWorkoutLog = async (req: AuthRequest, res: Response) => {
  try {
    const user = await User.findById(req.userId).populate(
      "tracking.workoutLog.workoutId",
      "name level goal daysPerWeek split",
    );

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.json(user.tracking.workoutLog);
  } catch (error) {
    console.error("getWorkoutLog error:", error);
    res.status(500).json({ message: "Failed to fetch workout log" });
  }
};
