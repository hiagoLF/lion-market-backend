import { getRepository } from "typeorm";
import AppError from "../../errors/AppError";
import { Product } from "../../typeorm/entities/Products";

export async function createProduct(data: Partial<Product>){
  const productRepository = getRepository(Product)
  const product = await productRepository.save(data)
  if(!product) throw new AppError('Failed to create the product')
  return product
}