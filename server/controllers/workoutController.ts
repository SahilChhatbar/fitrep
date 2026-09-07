import Workout from "../models/workout.model.ts";
import User from "../models/user.model.ts";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { AuthRequest } from "../middleware/auth.middleware.ts";

export const workoutController = {
  getWorkouts: async (req: Request, res: Response) => {
    try {
      const workouts = await Workout.find();
      res.json(workouts);
    } catch (error) {
      console.error("Error fetching workouts:", error);
      res.status(500).json({ message: "Failed to fetch workouts" });
    }
  },

  getWorkoutById: async (req: Request, res: Response) => {
    try {
      if (!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).json({ message: "Invalid workout ID" });
        return;
      }

      const workout = await Workout.findById(req.params.id);

      if (!workout) {
        res.status(404).json({ message: "Workout not found" });
        return;
      }

      res.json(workout);
    } catch (error) {
      console.error(`Error fetching workout by ID ${req.params.id}:`, error);
      res.status(500).json({ message: "Failed to fetch workout" });
    }
  },

  createWorkout: async (req: AuthRequest, res: Response) => {
    try {
      const { name, level, goal, daysPerWeek, split, schedule } = req.body;

      let uploadedByCoach = undefined;
      if (req.userId) {
        const coachUser = await User.findById(req.userId);
        if (coachUser) {
          uploadedByCoach = coachUser.name;
        }
      }

      const workout = await Workout.create({
        name,
        level,
        goal,
        daysPerWeek,
        split,
        schedule,
        uploadedByCoach,
      });

      res.status(201).json(workout);
    } catch (error) {
      console.error("Error creating workout:", error);
      res.status(500).json({ message: "Failed to create workout plan" });
    }
  },

  updateWorkout: async (req: AuthRequest, res: Response) => {
    try {
      if (!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).json({ message: "Invalid workout ID" });
        return;
      }

      const { name, level, goal, daysPerWeek, split, schedule } = req.body;

      let uploadedByCoach = undefined;
      if (req.userId) {
        const coachUser = await User.findById(req.userId);
        if (coachUser) {
          uploadedByCoach = coachUser.name;
        }
      }

      const updatedFields: any = {
        ...(name && { name }),
        ...(level && { level }),
        ...(goal && { goal }),
        ...(daysPerWeek !== undefined && { daysPerWeek }),
        ...(split && { split }),
        ...(schedule && { schedule }),
      };

      if (uploadedByCoach) {
        updatedFields.uploadedByCoach = uploadedByCoach;
      }

      const workout = await Workout.findByIdAndUpdate(
        req.params.id,
        updatedFields,
        { new: true, runValidators: true }
      );

      if (!workout) {
        res.status(404).json({ message: "Workout not found" });
        return;
      }

      res.json(workout);
    } catch (error) {
      console.error(`Error updating workout ${req.params.id}:`, error);
      res.status(500).json({ message: "Failed to update workout plan" });
    }
  },
};
