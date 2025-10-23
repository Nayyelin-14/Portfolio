import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import asyncHandler from "../utils/asynHandler";
import User from "../models/user.model";

export interface CustomUser extends Request {
  user?: {
    userId: string;
    name: string;
    email: string;
    role: "customer" | "admin";
  };
}
export const authenticate = asyncHandler(
  async (req: CustomUser, res: Response, next: NextFunction) => {
    // Get token from cookies
    const { accessToken } = req.cookies;

    // Check if token exists
    if (!accessToken) {
      res.status(401);
      throw new Error("Unauthenticated User Detected");
    }

    try {
      // Verify token
      const decoded = jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET as string
      ) as JwtPayload;

      // Find user by ID
      const user = await User.findById(decoded.userId).select("-password");

      if (!user) {
        res.status(401);
        throw new Error("User not found or has been deleted");
      }

      // Attach user to request object
      req.user = {
        userId: user._id.toString(),
        email: user.email,
        name: user.name,
        role: user.role,
      };

      next();
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        res.status(401);

        throw new Error("Access token has expired. Please refresh");
      }
      if (error instanceof jwt.JsonWebTokenError) {
        res.status(401);

        throw new Error("Invalid access token. Please login again");
      }
      throw error;
    }
  }
);

export const authorization = (allowedRoles: string[]) => {
  return async (req: CustomUser, res: Response, next: NextFunction) => {
    try {
      const userID = req.user?.userId;

      if (!userID) {
        res.status(401);
        throw new Error("User not authenticated");
      }

      const existingUser = await User.findById(userID);

      if (!existingUser) {
        res.status(401);
        throw new Error("User not found");
      }

      if (!allowedRoles.includes(existingUser.role)) {
        res.status(403);
        throw new Error("Unauthorized: Insufficient permissions");
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};
