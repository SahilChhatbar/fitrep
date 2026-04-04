import { Response } from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import User from "../models/user.model.ts";
import Diet from "../models/diet.model.ts";
import Workout from "../models/workout.model.ts";
import { AuthRequest } from "../middleware/auth.middleware.ts";
import type {
  SignupInput,
  LoginInput,
  AssignDietInput,
  AssignWorkoutInput,
} from "../schemas/user.schema.ts";

const signToken = (userId: string) => {
  const secret = process.env.JWT_SECRET!;
  return jwt.sign({ userId }, secret, {
    expiresIn: process.env.JWT_EXPIRES_IN ?? "7d",
  } as jwt.SignOptions);
};

// ─── Auth ─────────────────────────────────────────────────────────────────────

export const signup = async (req: AuthRequest, res: Response) => {
  try {
    const { name, email, password } = req.body as SignupInput;

    const existing = await User.findOne({ email });
    if (existing) {
      res.status(409).json({ message: "Email already in use" });
      return;
    }

    const user = await User.create({ name, email, password });
    const token = signToken(String(user._id));

    res.status(201).json({ token, user });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Signup failed" });
  }
};

export const login = async (req: AuthRequest, res: Response) => {
  try {
    const { email, password } = req.body as LoginInput;

    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.comparePassword(password))) {
      res.status(401).json({ message: "Invalid email or password" });
      return;
    }

    const token = signToken(String(user._id));

    // Strip password before responding (toJSON handles this but be explicit)
    const userObj = user.toJSON();
    res.json({ token, user: userObj });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed" });
  }
};

// ─── Profile ──────────────────────────────────────────────────────────────────

export const getMe = async (req: AuthRequest, res: Response) => {
  try {
    const user = await User.findById(req.userId)
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
