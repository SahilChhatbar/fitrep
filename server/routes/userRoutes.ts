import express from "express";
import {
  signup,
  login,
  getMe,
  assignDiet,
  removeDiet,
  getDietLog,
  assignWorkout,
  removeWorkout,
  getWorkoutLog,
} from "../controllers/userController.ts";
import { authMiddleware } from "../middleware/auth.middleware.ts";
import { validate } from "../middleware/validate.middleware.ts";
import {
  signupSchema,
  loginSchema,
  assignDietSchema,
  assignWorkoutSchema,
} from "../schemas/user.schema.ts";

const userRoutes = express.Router();

// ─── Auth (public) ────────────────────────────────────────────────────────────
userRoutes.post("/signup", validate(signupSchema), signup);
userRoutes.post("/login", validate(loginSchema), login);

// ─── Profile (protected) ──────────────────────────────────────────────────────
userRoutes.get("/me", authMiddleware, getMe);

// ─── Diet Tracking (protected) ────────────────────────────────────────────────
userRoutes.post(
  "/me/diet",
  authMiddleware,
  validate(assignDietSchema),
  assignDiet,
);
userRoutes.delete("/me/diet", authMiddleware, removeDiet);
userRoutes.get("/me/diet/log", authMiddleware, getDietLog);

// ─── Workout Tracking (protected) ─────────────────────────────────────────────
userRoutes.post(
  "/me/workout",
  authMiddleware,
  validate(assignWorkoutSchema),
  assignWorkout,
);
userRoutes.delete("/me/workout", authMiddleware, removeWorkout);
userRoutes.get("/me/workout/log", authMiddleware, getWorkoutLog);

export default userRoutes;
