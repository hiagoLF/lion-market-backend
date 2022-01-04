import { getCustomRepository } from "typeorm";
import AppError from "../../errors/AppError";
import { ProductRepository } from "../../repositorires/ProductRepository";
import { extractKeyFromImageUrl } from "../../util/extractKeyFromImageUrl";
import { deleteFile } from "../images/removeImage";

export async function updateProductImageUrl(
  productId: string,
  imageUrl: string
) {
  const productRepo = getCustomRepository(ProductRepository);
  const product = await productRepo.findById(productId);
  if(!product) throw new AppError('Product not found')
  if (product.imageUrl) {

    const imageKey = extractKeyFromImageUrl(product.imageUrl)

    console.log('Deletando >> ', imageKey)
    console.log('Tava nesse link >> ', product.imageUrl)
    deleteFile(imageKey)
  }
  product.imageUrl = imageUrl;
  await productRepo.save(product)
}
