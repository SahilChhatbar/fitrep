import mongoose, { Schema, Document } from "mongoose";

export type WorkoutLevel = "beginner" | "intermediate" | "advanced";
export type WorkoutGoal =
  | "fat_loss"
  | "muscle_gain"
  | "strength"
  | "general_fitness"
  | "hypertrophy";

interface ExerciseDetails {
  description?: string;
  muscles?: string[];
}

interface Exercise {
  name: string;
  sets?: number;
  reps?: string;
  details?: ExerciseDetails;
}

interface DayPlan {
  day: string;
  focus: string;
  exercises: Exercise[];
}

export interface WorkoutDocument extends Document {
  name: string;
  level: WorkoutLevel;
  goal: WorkoutGoal;
  daysPerWeek: number;
  split: string;
  schedule: DayPlan[];
  createdAt: Date;
  updatedAt: Date;
}

const ExerciseDetailsSchema = new Schema<ExerciseDetails>(
  {
    description: { type: String },
    muscles: { type: [String] },
  },
  { _id: false },
);

const ExerciseSchema = new Schema<Exercise>(
  {
    name: { type: String, required: true },
    sets: { type: Number },
    reps: { type: String },
    details: { type: ExerciseDetailsSchema },
  },
  { _id: false },
);

const DaySchema = new Schema<DayPlan>(
  {
    day: { type: String, required: true },
    focus: { type: String, required: true },
    exercises: {
      type: [ExerciseSchema],
      validate: [(val: Exercise[]) => val.length > 0, "At least one exercise"],
    },
  },
  { _id: false },
);

const WorkoutSchema = new Schema<WorkoutDocument>(
  {
    name: { type: String, required: true, index: true },
    level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      required: true,
      index: true,
    },
    goal: {
      type: String,
      enum: [
        "fat_loss",
        "muscle_gain",
        "strength",
        "general_fitness",
        "hypertrophy",
      ],
      required: true,
      index: true,
    },
    daysPerWeek: { type: Number, required: true },
    split: { type: String, required: true },
    schedule: {
      type: [DaySchema],
      validate: [
        (val: DayPlan[]) => val.length > 0,
        "At least one day required",
      ],
    },
  },
  { timestamps: true },
);

WorkoutSchema.index({ level: 1, goal: 1 });

export default mongoose.model<WorkoutDocument>(
  "Workout",
  WorkoutSchema,
  "workouts",
);
