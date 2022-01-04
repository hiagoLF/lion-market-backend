import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import AppError from "../errors/AppError";
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

  try {
    const secret = getJwtSecret();
    const decoded = verify(authTokenparts[1], secret);
    console.log("Token aqui >>> ", decoded);
    return next();
  } catch {
    throw new AppError("Invalid JWT Token.");
  }
}
