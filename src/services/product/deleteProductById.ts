import { getCustomRepository } from "typeorm";
import AppError from "../../errors/AppError";
import { ProductRepository } from "../../repositorires/ProductRepository";

export async function deleteProductById(productId: string) {
  const productRepo = getCustomRepository(ProductRepository);
  const deleted = await productRepo.delete({id: productId})
  console.log(deleted)
  if(deleted.affected === 0) throw new AppError('Failed deleting product')
}
