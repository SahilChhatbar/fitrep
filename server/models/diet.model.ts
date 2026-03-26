import mongoose, { Schema, Document } from "mongoose";

export type DietType = "Vegetarian" | "Non-Vegetarian" | "Vegan";
export type DietGoal = "fat_loss" | "muscle_gain" | "maintenance";

interface Food {
  fdcId: number;
  name: string;
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

const FoodSchema = new Schema<Food>(
  {
    fdcId: { type: Number, required: true },
    name: { type: String, required: true },
  },
  { _id: false }
);

const MealSchema = new Schema<Meal>(
  {
    name: { type: String, required: true },
    foods: {
      type: [FoodSchema],
      validate: [(val: Food[]) => val.length > 0, "At least one food required"],
    },
  },
  { _id: false }
);

const DietSchema = new Schema<DietDocument>(
  {
    id: {
      type: String,
      required: true,
      unique: true, // ensures no duplicates
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
  { timestamps: true }
);
//filtering
DietSchema.index({ goal: 1, calories: 1 });

export default mongoose.model<DietDocument>("Diet", DietSchema, "diets");
