import express from "express";
import {
  logCheckIn,
  getCheckInHistory,
  deleteCheckIn,
  logWorkoutSession,
  getWorkoutSessionHistory,
  deleteWorkoutSession,
  getProgressSummary,
} from "../controllers/progressController.ts";
import { authMiddleware } from "../middleware/auth.middleware.ts";
import { validate, validateQuery } from "../middleware/validate.middleware.ts";
import {
  checkInSchema,
  workoutSessionSchema,
  historyQuerySchema,
} from "../schemas/progress.schema.ts";

const progressRoutes = express.Router();

// All progress routes are protected
progressRoutes.use(authMiddleware);

// ─── Combined Summary ─────────────────────────────────────────────────────────
progressRoutes.get("/summary", getProgressSummary);

// ─── Body Check-Ins ───────────────────────────────────────────────────────────
progressRoutes.post("/checkin", validate(checkInSchema), logCheckIn);
progressRoutes.get(
  "/checkin",
  validateQuery(historyQuerySchema),
  getCheckInHistory,
);
progressRoutes.delete("/checkin/:id", deleteCheckIn);

// ─── Workout Sessions ─────────────────────────────────────────────────────────
progressRoutes.post(
  "/session",
  validate(workoutSessionSchema),
  logWorkoutSession,
);
progressRoutes.get(
  "/session",
  validateQuery(historyQuerySchema),
  getWorkoutSessionHistory,
);
progressRoutes.delete("/session/:id", deleteWorkoutSession);

export default progressRoutes;
