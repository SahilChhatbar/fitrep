import Diet from "../models/diet.model.ts";

export const dietController = {
    getDiets: async (req, res) => {
        try {
            const diets = await Diet.find();
            res.json(diets);
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch diets' });
        }
    },
    getDietById: async (req, res) => {
        try {
            const diet = await Diet.findById(req.params.id);
            res.json(diet);
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch diet' });
        }
    }
}
