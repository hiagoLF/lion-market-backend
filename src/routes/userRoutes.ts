import { Router } from "express";
import { userControllers } from "../controllers/userControllers";
import { loginUserValidator } from "./validators/userValidators";

export const userRoutes = Router();

userRoutes.post("/register", loginUserValidator, userControllers.registerUser);

userRoutes.post("/login", loginUserValidator, userControllers.loginUser);
