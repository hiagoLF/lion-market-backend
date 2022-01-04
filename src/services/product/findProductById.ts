import { getCustomRepository } from "typeorm";
import AppError from "../../errors/AppError";
import { ProductRepository } from "../../repositorires/ProductRepository";

export async function findProductById(productId: string) {
  const productRepo = getCustomRepository(ProductRepository);
  const product = await productRepo.findById(productId)
  if(!product) throw new AppError('Error on bring products')
  return product
}
