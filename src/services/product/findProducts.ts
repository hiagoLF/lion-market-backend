import { getCustomRepository } from "typeorm";
import AppError from "../../errors/AppError";
import { ProductRepository } from "../../repositorires/ProductRepository";

export async function findProducts(page: number, title: string) {
  const productRepo = getCustomRepository(ProductRepository);
  const products = await productRepo.findAllPaginated(
    page,
    title || ""
  );
  if(!products) throw new AppError('Error on bring products')
  return products
}
