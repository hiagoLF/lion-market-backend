import AppError from "../errors/AppError"

export function getJwtSecret(){
  const jwtSecret = process.env.JWT_SECRET
  if(!jwtSecret) throw new AppError('Server broken: JWT_SECRET not provided')
  return jwtSecret
}