import express from "express";
import { authenticate, authorization } from "../middlewares/isAuth";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/Products/products.con";
import { productValidator } from "../utils/validations";
import { validateProductCreaion } from "../middlewares/validate.midd";

const router = express.Router();

router.post(
  "/create-product",
  authenticate,
  authorization(["admin"]),
  productValidator,
  validateProductCreaion,
  createProduct
);
router.delete(
  "/delete-product/:productId",
  authenticate,
  authorization(["admin"]),
  deleteProduct
);
router.put(
  "/update-product/:productId",
  authenticate,
  authorization(["admin"]),
  updateProduct
);
export default router;
