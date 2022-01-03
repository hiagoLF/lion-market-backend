import { Router } from "express";
import { productRoutes } from "./productRoutes";
import { userRoutes } from "./userRoutes";

export const appRoutes = Router()

appRoutes.use('/user', userRoutes)
appRoutes.use('/product', productRoutes)