import { Router } from "express";
import { userRoutes } from "./userRoutes";

export const appRoutes = Router()

appRoutes.use('/user', userRoutes)