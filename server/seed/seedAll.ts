import mongoose from "mongoose";
import dotenv from "dotenv"

import { seedWorkouts } from "./seedWorkouts.ts"
import { seedDiets } from "./seedDiets.ts";

dotenv.config()

export const seedAll = async () => {
try {
    if(!process.env.MONGODB_URI){
        throw new Error("MongoDB Connection String Missing")
    }
    //Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("MongoDB connection established successful")
    //Run Seeders
    await seedWorkouts()
    await seedDiets()

    console.log("Data seeded successfully")

    process.exit(1)
    } catch(err) {
    console.error("Data Seeding failed:", err)
    process.exit(0)
    }
}
seedAll()
