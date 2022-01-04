import { Router } from "express";
import { productControllers } from "../controllers/productControllers";
import { authenticationMidleware } from "../middlewares/authenticationMidleware";
import {
  createProductValidator,
  findProductsValidator,
  updateProductValidator,
  findProductByIdValidator,
  deleteProductValidator,
} from "./validators/productValidators";

export const productRoutes = Router();

productRoutes.use(authenticationMidleware);

productRoutes.get(
  "/",
  findProductsValidator,
  productControllers.findProductsPaginated
);
productRoutes.post(
  "/",
  createProductValidator,
  productControllers.createProduct
);
productRoutes.patch(
  "/:productId",
  updateProductValidator,
  productControllers.updateProduct
);
productRoutes.get(
  "/:productId",
  findProductByIdValidator,
  productControllers.findProductById
);
productRoutes.delete(
  "/:productId",
  deleteProductValidator,
  productControllers.deleteProductById
);
