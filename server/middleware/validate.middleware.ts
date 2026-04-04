import { Request, Response, NextFunction } from "express";
import { ZodType, ZodError } from "zod";

// Validates req.body
export const validate =
  (schema: ZodType) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const errors = (result.error as ZodError).issues.map((e) => ({
        field: e.path.join("."),
        message: e.message,
      }));
      res.status(400).json({ message: "Validation failed", errors });
      return;
    }
    req.body = result.data;
    next();
  };

// Validates req.query
export const validateQuery =
  (schema: ZodType) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.query);
    if (!result.success) {
      const errors = (result.error as ZodError).issues.map((e) => ({
        field: e.path.join("."),
        message: e.message,
      }));
      res.status(400).json({ message: "Invalid query parameters", errors });
      return;
    }
    // Attach parsed query to req so controllers get coerced types
    (req as Request & { parsedQuery: unknown }).parsedQuery = result.data;
    next();
  };
