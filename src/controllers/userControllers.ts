import { Request, Response } from "express";
import { loginUser } from "../services/user/loginUser";
import { registerUser } from "../services/user/registerUser";

export const userControllers = {
  loginUser: async (req: Request, res: Response) => {
    const { login: userLogin, password } = req.body;
    const token = await loginUser(userLogin, password);
    if (!token) {
      return res.status(400).json({ message: "User could not be logged" });
    }
    return res
      .status(200)
      .json({ token });
  },

  registerUser: async (req: Request, res: Response) => {
    const { login: userLogin, password } = req.body;
    const userRegistered = await registerUser(userLogin, password);
    if (!userRegistered) {
      return res.status(400).json({ message: "User could not be registered" });
    }
    const { login, authorized } = userRegistered;
    return res
      .status(200)
      .json({ message: "User created", user: { login, authorized } });
  },
};
