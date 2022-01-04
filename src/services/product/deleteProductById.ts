import { getCustomRepository } from "typeorm";
import AppError from "../../errors/AppError";
import { ProductRepository } from "../../repositorires/ProductRepository";
import { extractKeyFromImageUrl } from "../../util/extractKeyFromImageUrl";
import { deleteFile } from "../images/removeImage";

export async function deleteProductById(productId: string) {
  const productRepo = getCustomRepository(ProductRepository);
  const productToDelete = await productRepo.findById(productId);
  if (!productToDelete) throw new AppError("Product not found");
  if (productToDelete.imageUrl) {
    const imageKey = extractKeyFromImageUrl(productToDelete.imageUrl);
    deleteFile(imageKey);
  }
  const deleted = await productRepo.delete({ id: productId });
  if (deleted.affected === 0) throw new AppError("Product not deleted");
}
