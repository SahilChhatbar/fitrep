import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import workoutRoutes from "./routes/workoutRoutes.ts"
import dietRoutes from "./routes/dietRoutes.ts"

dotenv.config()

const app = express()
const PORT = 5001

app.use(express.json())

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  console.error("MONGODB_URI is not defined in .env")
  process.exit(1)
}

mongoose.connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err)
    process.exit(1)
  })

app.use('/api/workouts', workoutRoutes)
app.use('/api/diets', dietRoutes)

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`)
})
