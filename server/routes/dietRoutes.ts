import express from "express";
import { dietController } from "../controllers/dietController.ts";
import { authMiddleware, requireCoach } from "../middleware/auth.middleware.ts";

const dietRoutes = express.Router();

dietRoutes.get('/', dietController.getDiets);
dietRoutes.get('/:id', dietController.getDietById);
dietRoutes.post('/', authMiddleware, requireCoach, dietController.createDiet);
dietRoutes.put('/:id', authMiddleware, requireCoach, dietController.updateDiet);

export default dietRoutes;
