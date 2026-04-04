import mongoose, { Schema, Document } from "mongoose";

// ─── Body Check-In ────────────────────────────────────────────────────────────
// Logged periodically (daily/weekly) by the user

export interface CheckInDocument extends Document {
  userId: mongoose.Types.ObjectId;
  date: Date;
  weight?: number; // kg
  bodyFat?: number; // percentage
  notes?: string;
  activeDietId?: mongoose.Types.ObjectId | null;
  activeWorkoutId?: mongoose.Types.ObjectId | null;
  createdAt: Date;
  updatedAt: Date;
}

const CheckInSchema = new Schema<CheckInDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    weight: { type: Number, min: 0 },
    bodyFat: { type: Number, min: 0, max: 100 },
    notes: { type: String, maxlength: 500 },
    // Snapshot of what plan the user was on at check-in time
    activeDietId: { type: Schema.Types.ObjectId, ref: "Diet", default: null },
    activeWorkoutId: {
      type: Schema.Types.ObjectId,
      ref: "Workout",
      default: null,
    },
  },
  { timestamps: true },
);

// One check-in per user per day
CheckInSchema.index({ userId: 1, date: -1 });

export const CheckIn = mongoose.model<CheckInDocument>(
  "CheckIn",
  CheckInSchema,
  "checkins",
);

// ─── Workout Session ──────────────────────────────────────────────────────────
// Logged each time a user completes a workout day

export interface WorkoutSessionDocument extends Document {
  userId: mongoose.Types.ObjectId;
  workoutId: mongoose.Types.ObjectId;
  dayCompleted: string; // e.g. "Day 1", "Push A"
  completedAt: Date;
  durationMinutes?: number;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const WorkoutSessionSchema = new Schema<WorkoutSessionDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    workoutId: {
      type: Schema.Types.ObjectId,
      ref: "Workout",
      required: true,
    },
    dayCompleted: { type: String, required: true },
    completedAt: { type: Date, default: Date.now },
    durationMinutes: { type: Number, min: 0 },
    notes: { type: String, maxlength: 500 },
  },
  { timestamps: true },
);

WorkoutSessionSchema.index({ userId: 1, completedAt: -1 });
WorkoutSessionSchema.index({ userId: 1, workoutId: 1 });

export const WorkoutSession = mongoose.model<WorkoutSessionDocument>(
  "WorkoutSession",
  WorkoutSessionSchema,
  "workout_sessions",
);
