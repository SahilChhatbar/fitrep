import { z } from "zod";

// ─── Shared sub-schemas ───────────────────────────────────────────────────────

const foodNutritionSchema = z
  .object({
    calories: z.number().nonnegative("Calories must be ≥ 0").optional(),
    protein: z.number().nonnegative("Protein must be ≥ 0").optional(),
    carbs: z.number().nonnegative("Carbs must be ≥ 0").optional(),
    fat: z.number().nonnegative("Fat must be ≥ 0").optional(),
  })
  .optional();

const foodSchema = z.object({
  name: z.string().min(1, "Food name is required").max(100, "Food name too long"),
  nutrition: foodNutritionSchema,
});

const mealSchema = z.object({
  name: z.string().min(1, "Meal name is required").max(100, "Meal name too long"),
  foods: z
    .array(foodSchema)
    .min(1, "Each meal must have at least one food item"),
});

// ─── Create Diet ──────────────────────────────────────────────────────────────

export const createDietSchema = z.object({
  name: z
    .string()
    .min(2, "Diet name must be at least 2 characters")
    .max(120, "Diet name is too long")
    .trim(),
  goal: z.enum(["fat_loss", "muscle_gain", "maintenance"], {
    errorMap: () => ({
      message: "Goal must be fat_loss, muscle_gain, or maintenance",
    }),
  }),
  type: z
    .enum(["Vegetarian", "Non-Vegetarian", "Vegan"], {
      errorMap: () => ({
        message: "Type must be Vegetarian, Non-Vegetarian, or Vegan",
      }),
    })
    .optional()
    .default("Non-Vegetarian"),
  calories: z
    .number({ message: "Calories must be a number" })
    .int("Calories must be a whole number")
    .positive("Calories must be a positive number")
    .max(10_000, "Calories value seems too high"),
  macros: z
    .object({
      protein: z.number().nonnegative("Protein must be ≥ 0").optional(),
      carbs: z.number().nonnegative("Carbs must be ≥ 0").optional(),
      fat: z.number().nonnegative("Fat must be ≥ 0").optional(),
    })
    .optional(),
  meals: z
    .array(mealSchema)
    .min(1, "At least one meal is required")
    .max(10, "Too many meals (max 10)"),
});

// ─── Update Diet (all fields optional) ───────────────────────────────────────

export const updateDietSchema = z
  .object({
    name: z
      .string()
      .min(2, "Diet name must be at least 2 characters")
      .max(120, "Diet name is too long")
      .trim()
      .optional(),
    goal: z
      .enum(["fat_loss", "muscle_gain", "maintenance"], {
        errorMap: () => ({
          message: "Goal must be fat_loss, muscle_gain, or maintenance",
        }),
      })
      .optional(),
    type: z
      .enum(["Vegetarian", "Non-Vegetarian", "Vegan"], {
        errorMap: () => ({
          message: "Type must be Vegetarian, Non-Vegetarian, or Vegan",
        }),
      })
      .optional(),
    calories: z
      .number({ message: "Calories must be a number" })
      .int("Calories must be a whole number")
      .positive("Calories must be a positive number")
      .max(10_000, "Calories value seems too high")
      .optional(),
    macros: z
      .object({
        protein: z.number().nonnegative("Protein must be ≥ 0").optional(),
        carbs: z.number().nonnegative("Carbs must be ≥ 0").optional(),
        fat: z.number().nonnegative("Fat must be ≥ 0").optional(),
      })
      .optional(),
    meals: z
      .array(mealSchema)
      .min(1, "At least one meal is required")
      .max(10, "Too many meals (max 10)")
      .optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field must be provided for update",
  });

// ─── Types ────────────────────────────────────────────────────────────────────

export type CreateDietInput = z.infer<typeof createDietSchema>;
export type UpdateDietInput = z.infer<typeof updateDietSchema>;
