import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import AppError from "../errors/AppError";
import { UserRepository } from "../repositorires/UserRepository";
import { getJwtSecret } from "../util/getJwtSecret";

export async function authenticationMidleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.token as String;
  if (!authToken) throw new AppError("Authentication token not provided");

  const authTokenparts = authToken.split(" ");
  if (!authTokenparts[1]) throw new AppError("Malformated token");

  const secret = getJwtSecret();
  const decoded = verify(authTokenparts[1], secret);

  const userRepo = getCustomRepository(UserRepository);
  const user = await userRepo.findById(decoded?.sub as string);
  if (!user) throw new AppError("User not found");
  if (!user.authorized) throw new AppError("User not authorized");

  return next();
}
