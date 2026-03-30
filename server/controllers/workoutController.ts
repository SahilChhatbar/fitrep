import Workout from "../models/workout.model.ts";

export const workoutController = {
    getWorkouts: async (req, res) => {
        try {
            const workouts = await Workout.find();
            res.json(workouts);
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch workouts' });
        }
    },
    getWorkoutById: async (req, res) => {
        try {
            const workout = await Workout.findById(req.params.id);
            res.json(workout);
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch workout' });
        }
    }
}
