import { Router } from "express";
import { productControllers } from "../controllers/productControllers";
import { authenticationMidleware } from "../middlewares/authenticationMidleware";
import { createProductValidator, findProductsValidator } from "./validators/productValidators";

export const productRoutes = Router();

productRoutes.use(authenticationMidleware)

productRoutes.get("", findProductsValidator, productControllers.findProductsPaginated);
productRoutes.post("", createProductValidator, productControllers.createProduct);
