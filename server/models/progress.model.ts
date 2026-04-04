import mongoose, { Schema, Document } from "mongoose";

// ─── Body Check-In ────────────────────────────────────────────────────────────

export interface CheckInDocument extends Document {
  userId: mongoose.Types.ObjectId;
  date: Date;
  /** YYYY-MM-DD in UTC — used for one-per-day uniqueness and streak calculation */
  dayKey: string;
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
    // Derived from date on save — used for uniqueness and streak math
    dayKey: {
      type: String, // "YYYY-MM-DD"
      required: true,
    },
    weight: { type: Number, min: 0 },
    bodyFat: { type: Number, min: 0, max: 100 },
    notes: { type: String, maxlength: 500 },
    activeDietId: {
      type: Schema.Types.ObjectId,
      ref: "Diet",
      default: null,
    },
    activeWorkoutId: {
      type: Schema.Types.ObjectId,
      ref: "Workout",
      default: null,
    },
  },
  { timestamps: true },
);

// ONE check-in per user per calendar day — enforced at DB level
CheckInSchema.index({ userId: 1, dayKey: 1 }, { unique: true });
// Fast reverse-chron fetching
CheckInSchema.index({ userId: 1, date: -1 });

export const CheckIn = mongoose.model<CheckInDocument>(
  "CheckIn",
  CheckInSchema,
  "checkins",
);

// ─── Workout Session ──────────────────────────────────────────────────────────

export interface WorkoutSessionDocument extends Document {
  userId: mongoose.Types.ObjectId;
  workoutId: mongoose.Types.ObjectId;
  dayCompleted: string; // e.g. "Day 1", "Push A"
  completedAt: Date;
  /** YYYY-MM-DD in UTC — used for streak and overlap calculation */
  dayKey: string;
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
    dayKey: {
      type: String, // "YYYY-MM-DD"
      required: true,
    },
    durationMinutes: { type: Number, min: 1 },
    notes: { type: String, maxlength: 500 },
  },
  { timestamps: true },
);

// Prevent logging the exact same workout day more than once per calendar day
WorkoutSessionSchema.index(
  { userId: 1, workoutId: 1, dayCompleted: 1, dayKey: 1 },
  { unique: true },
);
// Fast reverse-chron fetching
WorkoutSessionSchema.index({ userId: 1, completedAt: -1 });
WorkoutSessionSchema.index({ userId: 1, workoutId: 1 });

export const WorkoutSession = mongoose.model<WorkoutSessionDocument>(
  "WorkoutSession",
  WorkoutSessionSchema,
  "workout_sessions",
);
