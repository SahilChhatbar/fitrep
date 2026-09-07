import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.model.ts";

export interface AuthRequest extends Request {
  userId?: string;
  userRole?: "user" | "coach";
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "No token provided" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("JWT_SECRET not configured");

    const payload = jwt.verify(token, secret) as {
      userId: string;
      role?: "user" | "coach";
    };
    req.userId = payload.userId;
    req.userRole = payload.role;
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

export const requireCoach = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  if (!req.userId) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  try {
    let role = req.userRole;
    if (!role) {
      const user = await User.findById(req.userId);
      role = user?.role;
    }

    if (role !== "coach") {
      res.status(403).json({ message: "Access denied. Coach role required." });
      return;
    }

    next();
  } catch (error) {
    console.error("requireCoach error:", error);
    res.status(500).json({ message: "Authorization check failed" });
  }
};
