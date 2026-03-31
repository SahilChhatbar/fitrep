import Diet from "../models/diet.model.ts";
import { Request, Response } from "express";

export const dietController = {
    getDiets: async (req: Request, res: Response) => {
        try {
            const diets = await Diet.find();
            res.json(diets);
        } catch (error) {
            console.error('Error fetching diets:', error);
            res.status(500).json({ message: 'Failed to fetch diets' });
        }
    },
    getDietById: async (req: Request, res: Response) => {
        try {
            const diet = await Diet.findById(req.params.id);
            res.json(diet);
        } catch (error) {
            console.error(`Error fetching diet by ID ${req.params.id}:`, error);
            res.status(500).json({ message: 'Failed to fetch diet' });
        }
    }
}
