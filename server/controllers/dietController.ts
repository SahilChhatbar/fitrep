import Diet from "../models/diet.model.ts";
import { Request, Response } from "express";
import mongoose from "mongoose";

export const dietController = {
  getDiets: async (req: Request, res: Response) => {
    try {
      const diets = await Diet.find();
      res.json(diets);
    } catch (error) {
      console.error("Error fetching diets:", error);
      res.status(500).json({ message: "Failed to fetch diets" });
    }
  },

  getDietById: async (req: Request, res: Response) => {
    try {
      if (!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).json({ message: "Invalid diet ID" });
        return;
      }

      const diet = await Diet.findById(req.params.id);

      if (!diet) {
        res.status(404).json({ message: "Diet not found" });
        return;
      }

      res.json(diet);
    } catch (error) {
      console.error(`Error fetching diet by ID ${req.params.id}:`, error);
      res.status(500).json({ message: "Failed to fetch diet" });
    }
  },
};
