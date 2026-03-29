import mongoose from "mongoose";
import dotenv from "dotenv";
import { seedWorkouts } from "./seedWorkouts.ts";
import { seedDiets } from "./seedDiets.ts";

dotenv.config();

const seedAll = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI missing from .env");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");

    await seedWorkouts();
    await seedDiets();

    console.log("=== Seeding complete ===");
    process.exit(0);
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
};

seedAll();
