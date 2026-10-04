import express from "express";
import { workoutController } from "../controllers/workoutController.ts";
import { authMiddleware, requireCoach } from "../middleware/auth.middleware.ts";
import { validate } from "../middleware/validate.middleware.ts";
import {
  createWorkoutSchema,
  updateWorkoutSchema,
} from "../schemas/workout.schema.ts";

const workoutRoutes = express.Router();

workoutRoutes.get("/", workoutController.getWorkouts);
workoutRoutes.get("/:id", workoutController.getWorkoutById);
workoutRoutes.post(
  "/",
  authMiddleware,
  requireCoach,
  validate(createWorkoutSchema),
  workoutController.createWorkout,
);
workoutRoutes.put(
  "/:id",
  authMiddleware,
  requireCoach,
  validate(updateWorkoutSchema),
  workoutController.updateWorkout,
);

export default workoutRoutes;
