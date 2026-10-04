import { z } from "zod";

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Loose MongoDB ObjectId format check (24 hex chars). */
const objectIdSchema = z
  .string()
  .regex(/^[a-f\d]{24}$/i, "Invalid ID format");

// ─── Auth ─────────────────────────────────────────────────────────────────────

export const signupSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(60, "Name must be under 60 characters")
    .trim(),
  email: z
    .string()
    .email("Invalid email address")
    .max(254, "Email is too long")
    .toLowerCase()
    .trim(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(128, "Password must be under 128 characters"),
  role: z.enum(["user", "coach"]).optional().default("user"),
  coachId: objectIdSchema.nullable().optional(),
});

export const loginSchema = z.object({
  identifier: z
    .string()
    .min(1, "Name or Email is required")
    .max(254, "Identifier is too long")
    .trim(),
  password: z
    .string()
    .min(1, "Password is required")
    .max(128, "Password is too long"),
  role: z.enum(["user", "coach"]).optional(),
});

// ─── Tracking & Coach ────────────────────────────────────────────────────────

export const assignDietSchema = z.object({
  dietId: objectIdSchema,
  note: z
    .string()
    .max(300, "Note must be under 300 characters")
    .trim()
    .optional(),
});

export const assignWorkoutSchema = z.object({
  workoutId: objectIdSchema,
  note: z
    .string()
    .max(300, "Note must be under 300 characters")
    .trim()
    .optional(),
});

export const assignCoachSchema = z.object({
  /** Pass a valid ObjectId to assign, "none" or null/omitted to remove. */
  coachId: z
    .union([objectIdSchema, z.literal("none")])
    .nullable()
    .optional(),
});

// ─── Types ────────────────────────────────────────────────────────────────────

export type SignupInput = z.infer<typeof signupSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type AssignDietInput = z.infer<typeof assignDietSchema>;
export type AssignWorkoutInput = z.infer<typeof assignWorkoutSchema>;
export type AssignCoachInput = z.infer<typeof assignCoachSchema>;
