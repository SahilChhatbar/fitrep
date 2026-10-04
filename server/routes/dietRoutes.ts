import express from "express";
import { dietController } from "../controllers/dietController.ts";
import { authMiddleware, requireCoach } from "../middleware/auth.middleware.ts";
import { validate } from "../middleware/validate.middleware.ts";
import {
  createDietSchema,
  updateDietSchema,
} from "../schemas/diet.schema.ts";

const dietRoutes = express.Router();

dietRoutes.get("/", dietController.getDiets);
dietRoutes.get("/:id", dietController.getDietById);
dietRoutes.post(
  "/",
  authMiddleware,
  requireCoach,
  validate(createDietSchema),
  dietController.createDiet,
);
dietRoutes.put(
  "/:id",
  authMiddleware,
  requireCoach,
  validate(updateDietSchema),
  dietController.updateDiet,
);

export default dietRoutes;
