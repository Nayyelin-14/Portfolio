import { CustomUser } from "../../middlewares/isAuth";
import Product from "../../models/products.model";
import User from "../../models/user.model";
import asyncHandler from "../../utils/asynHandler";
import { NextFunction, Request, Response } from "express";
export const createProduct = asyncHandler(
  async (req: CustomUser, res: Response, next: NextFunction) => {
    // Get user ID from authenticated request (assuming auth middleware sets req.user)
    const userId = req.user?.userId;

    if (!userId) {
      res.status(401);
      throw new Error("User not authenticated");
    }
    const existingUser = await User.findById(userId);
    if (!existingUser || existingUser?.role !== "admin") {
      res.status(403);
      throw new Error("Unauthorized User");
    }

    const {
      name,
      description,
      price,
      rating_count,
      createdAt,
      updatedAt,
      is_Featured,
      is_newArrival,
      images,
      category,
      colors,
      sizes,
      instock_count,
    } = req.body;

    const newProduct = await Product.create({
      name,
      description,
      price,
      rating_count,
      createdAt,
      updatedAt,
      is_Featured,
      is_newArrival,
      images,
      category,
      colors,
      sizes,
      instock_count,
      user: userId,
    });

    if (newProduct) {
      res.status(200).json({
        isSuccess: true,
        message: "New Product is created successfully!!!",
        newProduct,
      });
    } else {
      res.status(400).json({
        isSuccess: false,
        message: "Something went wrong",
      });
    }
  }
);

export const deleteProduct = asyncHandler(
  async (req: CustomUser, res: Response, next: NextFunction) => {
    try {
      const { productId } = req.params;
      const userID = req.user?.userId;

      if (!userID) {
        res.status(401);
        throw new Error("User not authenticated");
      }

      const product = await Product.findById(productId);

      if (!product) {
        res.status(404);
        throw new Error("Product not found");
      }

      // Check if user owns the product or is admin
      if (product.user.toString() !== userID && req.user?.role !== "admin") {
        res.status(403);
        throw new Error("Not authorized to delete this product");
      }

      await Product.findByIdAndDelete(productId);

      res.status(200).json({
        success: true,
        message: "Product deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }
);

export const updateProduct = asyncHandler(
  async (req: CustomUser, res: Response, next: NextFunction) => {
    try {
      const { productId } = req.params;
      const userID = req.user?.userId;

      if (!userID) {
        res.status(401);
        throw new Error("User not authenticated");
      }

      const product = await Product.findById(productId);

      if (!product) {
        res.status(404);
        throw new Error("Product not found");
      }

      // Check if user owns the product or is admin
      if (product.user.toString() !== userID && req.user?.role !== "admin") {
        res.status(403);
        throw new Error("Not authorized to update this product");
      }

      // Partial update - only update fields that are provided
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        { $set: req.body },
        {
          new: true, // Return updated document
          runValidators: true, // Run schema validators
        }
      );

      res.status(200).json({
        success: true,
        message: "Product updated successfully",
        data: updatedProduct,
      });
    } catch (error) {
      next(error);
    }
  }
);
