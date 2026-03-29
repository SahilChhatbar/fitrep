import Workout from "../models/workout.model.ts";
import { workoutPlans } from "./data/workoutPlans.ts";

export const seedWorkouts = async () => {
  try {
    await Workout.deleteMany();
    console.log("Workouts cleared");

    await Workout.insertMany(workoutPlans);
    console.log("Workouts seeded");
  } catch (err) {
    console.error("Workout seeding failed");
    throw err;
  }
};
