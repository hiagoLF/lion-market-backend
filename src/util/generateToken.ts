import { sign } from "jsonwebtoken";
import AppError from "../errors/AppError";

export function generateJWT(text: string) {
  const tokenSecret = process.env.JWT_SECRET
  const tokenExpiresIn = process.env.JWT_EXPIRES_IN
  if(!tokenSecret || !tokenExpiresIn) throw new AppError('Server broken: JWT not provided')
  const token = sign({}, tokenSecret, {
    subject: text,
    expiresIn: tokenExpiresIn,
  });
  return token
}
