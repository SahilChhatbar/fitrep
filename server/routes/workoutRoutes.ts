import express from "express";
import { workoutController } from "../controllers/workoutController.ts";

const workoutRoutes = express.Router();

workoutRoutes.get('/', workoutController.getWorkouts)
workoutRoutes.get('/:id', workoutController.getWorkoutById)

export default workoutRoutes;
