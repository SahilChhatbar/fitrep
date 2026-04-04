import { z } from "zod";

// ─── Check-In ─────────────────────────────────────────────────────────────────

export const checkInSchema = z
  .object({
    date: z
      .string()
      .optional()
      .transform((v) => (v ? new Date(v) : new Date()))
      .refine((d) => !isNaN(d.getTime()), { message: "Invalid date" }),
    weight: z
      .number({ message: "Weight must be a number" })
      .positive("Weight must be positive")
      .max(500, "Weight seems too high")
      .optional(),
    bodyFat: z
      .number({ message: "Body fat must be a number" })
      .min(1, "Body fat must be at least 1%")
      .max(70, "Body fat must be under 70%")
      .optional(),
    notes: z.string().max(500, "Notes must be under 500 characters").optional(),
  })
  .refine(
    (data) =>
      data.weight !== undefined ||
      data.bodyFat !== undefined ||
      data.notes !== undefined,
    { message: "At least one of weight, bodyFat, or notes is required" },
  );

// ─── Workout Session ──────────────────────────────────────────────────────────

export const workoutSessionSchema = z.object({
  workoutId: z.string().min(1, "workoutId is required"),
  dayCompleted: z.string().min(1, "dayCompleted is required"),
  completedAt: z
    .string()
    .optional()
    .transform((v) => (v ? new Date(v) : new Date()))
    .refine((d) => !isNaN(d.getTime()), { message: "Invalid date" }),
  durationMinutes: z
    .number({ message: "Duration must be a number" })
    .int("Duration must be a whole number")
    .min(1, "Duration must be at least 1 minute")
    .max(600, "Duration seems too long")
    .optional(),
  notes: z.string().max(500, "Notes must be under 500 characters").optional(),
});

// ─── Query params for history ─────────────────────────────────────────────────

export const historyQuerySchema = z.object({
  limit: z
    .string()
    .optional()
    .transform((v) => (v ? parseInt(v, 10) : 30))
    .refine((n) => n > 0 && n <= 100, { message: "Limit must be 1-100" }),
  skip: z
    .string()
    .optional()
    .transform((v) => (v ? parseInt(v, 10) : 0))
    .refine((n) => n >= 0, { message: "Skip must be >= 0" }),
});

// ─── Types ────────────────────────────────────────────────────────────────────

export type CheckInInput = z.infer<typeof checkInSchema>;
export type WorkoutSessionInput = z.infer<typeof workoutSessionSchema>;
export type HistoryQuery = z.infer<typeof historyQuerySchema>;
