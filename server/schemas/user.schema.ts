import { z } from "zod";

// ─── Auth ─────────────────────────────────────────────────────────────────────

export const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").trim(),
  email: z.email("Invalid email address").toLowerCase().trim(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const loginSchema = z.object({
  identifier: z.string().min(1, "Name or Email is required").trim(),
  password: z.string().min(1, "Password is required"),
});

// ─── Tracking ─────────────────────────────────────────────────────────────────

export const assignDietSchema = z.object({
  dietId: z.string().min(1, "dietId is required"),
  note: z.string().max(300).optional(),
});

export const assignWorkoutSchema = z.object({
  workoutId: z.string().min(1, "workoutId is required"),
  note: z.string().max(300).optional(),
});

// ─── Types ────────────────────────────────────────────────────────────────────

export type SignupInput = z.infer<typeof signupSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type AssignDietInput = z.infer<typeof assignDietSchema>;
export type AssignWorkoutInput = z.infer<typeof assignWorkoutSchema>;
