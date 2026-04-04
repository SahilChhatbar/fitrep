import { z } from "zod";

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Derive a YYYY-MM-DD dayKey from a Date, optionally shifted by a UTC-offset
 * in minutes (positive = east of UTC, e.g. IST = +330).
 *
 * Why: toISOString() is always UTC. A user in UTC+5:30 logging at 11 pm local
 * time would get tomorrow's UTC date, breaking streak logic and the one-per-day
 * uniqueness constraint.
 *
 * We store dayKey alongside date so all streak / overlap math stays consistent.
 */
export function toDayKey(date: Date, utcOffsetMinutes = 0): string {
  const shifted = new Date(date.getTime() + utcOffsetMinutes * 60_000);
  return shifted.toISOString().split("T")[0];
}

// ─── Check-In ─────────────────────────────────────────────────────────────────

export const checkInSchema = z
  .object({
    date: z
      .string()
      .optional()
      .transform((v) => (v ? new Date(v) : new Date()))
      .refine((d) => !isNaN(d.getTime()), { message: "Invalid date" }),
    /**
     * Client should send their UTC offset in minutes so dayKey is computed
     * in the user's local calendar day, not UTC.
     * Defaults to 0 (UTC) if omitted.
     */
    utcOffsetMinutes: z.number().int().min(-720).max(840).default(0),
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
  /** See utcOffsetMinutes note above */
  utcOffsetMinutes: z.number().int().min(-720).max(840).default(0),
  durationMinutes: z
    .number({ message: "Duration must be a number" })
    .int("Duration must be a whole number")
    .min(1, "Duration must be at least 1 minute")
    .max(600, "Duration seems too long")
    .optional(),
  notes: z.string().max(500, "Notes must be under 500 characters").optional(),
});

// ─── History query ────────────────────────────────────────────────────────────

export const historyQuerySchema = z.object({
  limit: z
    .string()
    .optional()
    .transform((v) => (v ? parseInt(v, 10) : 30))
    .refine((n) => n > 0 && n <= 100, { message: "Limit must be 1–100" }),
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
