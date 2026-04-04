import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import workoutRoutes from "./routes/workoutRoutes.ts";
import dietRoutes from "./routes/dietRoutes.ts";
import userRoutes from "./routes/userRoutes.ts";
import progressRoutes from "./routes/progressRoutes.ts";

dotenv.config();

const app = express();

const PORT = Number(process.env.PORT) || 5000;

console.log("Starting server...");
console.log("PORT:", PORT);

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "*",
    credentials: true,
  }),
);

app.use("/api/workouts", workoutRoutes);
app.use("/api/diets", dietRoutes);
app.use("/api/user", userRoutes);
app.use("/api/progress", progressRoutes);

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use((_req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.error("MONGODB_URI missing");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

connectDB();
