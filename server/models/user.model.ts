import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  activeDietId?: mongoose.Types.ObjectId | null;
  activeWorkoutId?: mongoose.Types.ObjectId | null;
  tracking: {
    dietLog: {
      dietId: mongoose.Types.ObjectId;
      assignedAt: Date;
      note?: string;
    }[];
    workoutLog: {
      workoutId: mongoose.Types.ObjectId;
      assignedAt: Date;
      note?: string;
    }[];
  };
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidate: string): Promise<boolean>;
}

const UserSchema = new Schema<UserDocument>(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    password: { type: String, required: true, minlength: 6 },
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
    tracking: {
      dietLog: [
        {
          dietId: { type: Schema.Types.ObjectId, ref: "Diet", required: true },
          assignedAt: { type: Date, default: Date.now },
          note: { type: String },
        },
      ],
      workoutLog: [
        {
          workoutId: {
            type: Schema.Types.ObjectId,
            ref: "Workout",
            required: true,
          },
          assignedAt: { type: Date, default: Date.now },
          note: { type: String },
        },
      ],
    },
  },
  { timestamps: true },
);

// Hash password before save
UserSchema.pre("save", async function () {
  if (!this.isModified("password") || !this.password) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (
  candidate: string,
): Promise<boolean> {
  if (!this.password) return false;
  return bcrypt.compare(candidate, this.password);
};

// Never return password in JSON responses
UserSchema.set("toJSON", {
  transform: (_doc, ret: Partial<UserDocument>) => {
    delete ret.password;
    return ret;
  },
});

export default mongoose.model<UserDocument>("User", UserSchema, "users");
