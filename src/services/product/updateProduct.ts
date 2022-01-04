import { getCustomRepository, getRepository } from "typeorm";
import AppError from "../../errors/AppError";
import { ProductRepository } from "../../repositorires/ProductRepository";
import { Product } from "../../typeorm/entities/Products";

export async function updateProduct(productId: string, data: Partial<Product>) {
  const productRepo = getCustomRepository(ProductRepository);
  const product = await productRepo.findById(productId);
  if (!product) throw new AppError("Product not found");
  data.price && (product.price = data.price);
  data.title && (product.title = data.title);
  data.description && (product.description = data.description);
  const savedProduct = await productRepo.save(product);
  if(!savedProduct) throw new AppError('Failed on updating product')
}
