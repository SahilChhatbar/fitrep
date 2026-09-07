import Diet from "../models/diet.model.ts";
import User from "../models/user.model.ts";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { AuthRequest } from "../middleware/auth.middleware.ts";

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

  createDiet: async (req: AuthRequest, res: Response) => {
    try {
      const { name, goal, type, calories, macros, meals } = req.body;

      let uploadedByCoach = undefined;
      if (req.userId) {
        const coachUser = await User.findById(req.userId);
        if (coachUser) {
          uploadedByCoach = coachUser.name;
        }
      }

      const customId = `diet_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

      const diet = await Diet.create({
        id: customId,
        name,
        goal,
        type,
        calories,
        macros,
        meals,
        uploadedByCoach,
      });

      res.status(201).json(diet);
    } catch (error) {
      console.error("Error creating diet:", error);
      res.status(500).json({ message: "Failed to create diet plan" });
    }
  },

  updateDiet: async (req: AuthRequest, res: Response) => {
    try {
      if (!mongoose.isValidObjectId(req.params.id)) {
        res.status(400).json({ message: "Invalid diet ID" });
        return;
      }

      const { name, goal, type, calories, macros, meals } = req.body;

      let uploadedByCoach = undefined;
      if (req.userId) {
        const coachUser = await User.findById(req.userId);
        if (coachUser) {
          uploadedByCoach = coachUser.name;
        }
      }

      const updatedFields: any = {
        ...(name && { name }),
        ...(goal && { goal }),
        ...(type && { type }),
        ...(calories !== undefined && { calories }),
        ...(macros && { macros }),
        ...(meals && { meals }),
      };

      if (uploadedByCoach) {
        updatedFields.uploadedByCoach = uploadedByCoach;
      }

      const diet = await Diet.findByIdAndUpdate(
        req.params.id,
        updatedFields,
        { new: true, runValidators: true }
      );

      if (!diet) {
        res.status(404).json({ message: "Diet not found" });
        return;
      }

      res.json(diet);
    } catch (error) {
      console.error(`Error updating diet ${req.params.id}:`, error);
      res.status(500).json({ message: "Failed to update diet plan" });
    }
  },
};
