import { Router } from "express";
import { productControllers } from "../controllers/productControllers";
import { authenticationMidleware } from "../middlewares/authenticationMidleware";
import { createProductValidator } from "./validators/userValidators";

export const productRoutes = Router();

productRoutes.use(authenticationMidleware)

// TODO
productRoutes.post("", createProductValidator, productControllers.findProductsPaginated);


// productRoutes.post("", createProductValidator, productControllers.createProduct);
