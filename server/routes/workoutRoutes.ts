import express from "express";
import { workoutController } from "../controllers/workoutController.ts";
import { authMiddleware, requireCoach } from "../middleware/auth.middleware.ts";

const workoutRoutes = express.Router();

workoutRoutes.get('/', workoutController.getWorkouts);
workoutRoutes.get('/:id', workoutController.getWorkoutById);
workoutRoutes.post('/', authMiddleware, requireCoach, workoutController.createWorkout);
workoutRoutes.put('/:id', authMiddleware, requireCoach, workoutController.updateWorkout);

export default workoutRoutes;
