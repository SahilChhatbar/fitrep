import { z } from "zod";

// ─── Shared sub-schemas ───────────────────────────────────────────────────────

const exerciseDetailsSchema = z
  .object({
    description: z.string().max(500).optional(),
    muscles: z.array(z.string().min(1).max(50)).optional(),
  })
  .optional();

const exerciseSchema = z.object({
  name: z
    .string()
    .min(1, "Exercise name is required")
    .max(100, "Exercise name is too long"),
  sets: z
    .number({ message: "Sets must be a number" })
    .int("Sets must be a whole number")
    .min(1, "Sets must be at least 1")
    .max(100, "Sets value seems too high")
    .optional(),
  reps: z.string().max(50, "Reps description is too long").optional(),
  details: exerciseDetailsSchema,
});

const dayPlanSchema = z.object({
  day: z.string().min(1, "Day name is required").max(50, "Day name is too long"),
  focus: z
    .string()
    .min(1, "Focus is required")
    .max(100, "Focus description is too long"),
  exercises: z
    .array(exerciseSchema)
    .min(1, "Each day must have at least one exercise"),
});

// ─── Create Workout ───────────────────────────────────────────────────────────

export const createWorkoutSchema = z.object({
  name: z
    .string()
    .min(2, "Workout name must be at least 2 characters")
    .max(120, "Workout name is too long")
    .trim(),
  level: z.enum(["beginner", "intermediate", "advanced"], {
    errorMap: () => ({
      message: "Level must be beginner, intermediate, or advanced",
    }),
  }),
  goal: z.enum(
    ["fat_loss", "muscle_gain", "strength", "general_fitness", "hypertrophy"],
    {
      errorMap: () => ({
        message:
          "Goal must be fat_loss, muscle_gain, strength, general_fitness, or hypertrophy",
      }),
    },
  ),
  daysPerWeek: z
    .number({ message: "daysPerWeek must be a number" })
    .int("daysPerWeek must be a whole number")
    .min(1, "Must train at least 1 day per week")
    .max(7, "Cannot exceed 7 days per week"),
  split: z
    .string()
    .min(1, "Split is required")
    .max(100, "Split description is too long")
    .trim(),
  schedule: z
    .array(dayPlanSchema)
    .min(1, "At least one day is required in the schedule")
    .max(7, "Schedule cannot have more than 7 days"),
});

// ─── Update Workout (all fields optional) ────────────────────────────────────

export const updateWorkoutSchema = z
  .object({
    name: z
      .string()
      .min(2, "Workout name must be at least 2 characters")
      .max(120, "Workout name is too long")
      .trim()
      .optional(),
    level: z
      .enum(["beginner", "intermediate", "advanced"], {
        errorMap: () => ({
          message: "Level must be beginner, intermediate, or advanced",
        }),
      })
      .optional(),
    goal: z
      .enum(
        [
          "fat_loss",
          "muscle_gain",
          "strength",
          "general_fitness",
          "hypertrophy",
        ],
        {
          errorMap: () => ({
            message:
              "Goal must be fat_loss, muscle_gain, strength, general_fitness, or hypertrophy",
          }),
        },
      )
      .optional(),
    daysPerWeek: z
      .number({ message: "daysPerWeek must be a number" })
      .int("daysPerWeek must be a whole number")
      .min(1, "Must train at least 1 day per week")
      .max(7, "Cannot exceed 7 days per week")
      .optional(),
    split: z
      .string()
      .min(1, "Split is required")
      .max(100, "Split description is too long")
      .trim()
      .optional(),
    schedule: z
      .array(dayPlanSchema)
      .min(1, "At least one day is required in the schedule")
      .max(7, "Schedule cannot have more than 7 days")
      .optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field must be provided for update",
  });

// ─── Types ────────────────────────────────────────────────────────────────────

export type CreateWorkoutInput = z.infer<typeof createWorkoutSchema>;
export type UpdateWorkoutInput = z.infer<typeof updateWorkoutSchema>;
