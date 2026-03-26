import Diet from "../models/diet.model.ts";
import { dietPlans } from "./data/dietPlans.ts";

export const seedDiets = async () =>{
    try{
        await Diet.deleteMany()
        console.log("Diet Plans cleared")

        await Diet.insertMany(dietPlans)
        console.log("Diet Plans seeded")
    } catch(err){
        console.error("Seeding failed")
        throw err
    }
}
