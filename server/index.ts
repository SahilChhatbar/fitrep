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

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
    credentials: true,
  }),
);

// ─── Env guards ───────────────────────────────────────────────────────────────
const { MONGODB_URI, JWT_SECRET } = process.env;

if (!MONGODB_URI) {
  console.error("MONGODB_URI is not defined in .env");
  process.exit(1);
}

if (!JWT_SECRET) {
  console.error("JWT_SECRET is not defined in .env");
  process.exit(1);
}

// ─── DB ───────────────────────────────────────────────────────────────────────
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, "0.0.0.0", () => {
      console.log("server running on port", PORT);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use("/api/workouts", workoutRoutes);
app.use("/api/diets", dietRoutes);
app.use("/api/user", userRoutes);
app.use("/api/progress", progressRoutes);

// ─── Health check ─────────────────────────────────────────────────────────────
app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

// ─── 404 fallback ─────────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("server running on port", PORT);
});
