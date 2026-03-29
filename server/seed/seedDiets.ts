import Diet from "../models/diet.model.ts";
import { dietPlans } from "./data/dietPlans.ts";

export const seedDiets = async () => {
  try {
    await Diet.deleteMany();
    console.log("Diet plans cleared");

    await Diet.insertMany(dietPlans);
    console.log("Diet plans seeded");
  } catch (err) {
    console.error("Diet seeding failed");
    throw err;
  }
};
