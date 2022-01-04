import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";
import { findProductById } from "../services/product/findProductById";

export async function verifyIfProductExists(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { productId } = req.params;
  const foundProduct = await findProductById(productId);
  if(!foundProduct) throw new AppError('Product not found')
  next()
}
