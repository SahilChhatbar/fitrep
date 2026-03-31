import express from "express";
import { dietController } from "../controllers/dietController.ts";

const dietRoutes = express.Router();

dietRoutes.get('/', dietController.getDiets);
dietRoutes.get('/:id', dietController.getDietById);

export default dietRoutes;
