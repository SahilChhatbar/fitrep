import mongoose, { Schema, Document } from "mongoose";

export type DietType = "Vegetarian" | "Non-Vegetarian" | "Vegan";
export type DietGoal = "fat_loss" | "muscle_gain" | "maintenance";

interface FoodNutrition {
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
}

interface Food {
  name: string;
  nutrition?: FoodNutrition;
}

interface Meal {
  name: string;
  foods: Food[];
}

export interface DietDocument extends Document {
  id: string;
  name: string;
  goal: DietGoal;
  type: DietType;
  calories: number;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
  };
  meals: Meal[];
  createdAt: Date;
  updatedAt: Date;
}

const FoodNutritionSchema = new Schema<FoodNutrition>(
  {
    calories: { type: Number },
    protein: { type: Number },
    carbs: { type: Number },
    fat: { type: Number },
  },
  { _id: false },
);

const FoodSchema = new Schema<Food>(
  {
    name: { type: String, required: true },
    nutrition: { type: FoodNutritionSchema },
  },
  { _id: false },
);

const MealSchema = new Schema<Meal>(
  {
    name: { type: String, required: true },
    foods: {
      type: [FoodSchema],
      validate: [(val: Food[]) => val.length > 0, "At least one food required"],
    },
  },
  { _id: false },
);

const DietSchema = new Schema<DietDocument>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    name: { type: String, required: true, index: true },
    goal: {
      type: String,
      enum: ["fat_loss", "muscle_gain", "maintenance"],
      required: true,
      index: true,
    },
    type: {
      type: String,
      enum: ["Vegetarian", "Non-Vegetarian", "Vegan"],
      default: "Non-Vegetarian",
      index: true,
    },
    calories: { type: Number, required: true },
    macros: {
      protein: Number,
      carbs: Number,
      fat: Number,
    },
    meals: {
      type: [MealSchema],
      validate: [(val: Meal[]) => val.length > 0, "At least one meal required"],
    },
  },
  { timestamps: true },
);

DietSchema.index({ goal: 1, calories: 1 });

export default mongoose.model<DietDocument>("Diet", DietSchema, "diets");
