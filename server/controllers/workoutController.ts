import Workout from "../models/workout.model.ts";
import { Request, Response } from "express";

export const workoutController = {
    getWorkouts: async (req: Request, res: Response) => {
        try {
            const workouts = await Workout.find();
            res.json(workouts);
        } catch (error) {
            console.error('Error fetching workouts:', error);
            res.status(500).json({ message: 'Failed to fetch workouts' });
        }
    },
    getWorkoutById: async (req: Request, res: Response) => {
        try {
            const workout = await Workout.findById(req.params.id);
            res.json(workout);
        } catch (error) {
            console.error(`Error fetching workout by ID ${req.params.id}:`, error);
            res.status(500).json({ message: 'Failed to fetch workout' });
        }
    }
}
