import { EntityRepository, Like, Repository } from "typeorm";
import { Product } from "../typeorm/entities/Products";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  public async findAllPaginated(page: number, title?: string) {
    console.log(title);
    const products = await this.createQueryBuilder().orderBy('created_at', 'DESC')
      .where("LOWER(title) LIKE :title", {
        title: `%${title?.toLowerCase() || ""}%`,
      })
      .paginate(10);

    const formatedProducts = {
      pagination: {
        currentPage: products.current_page,
        pagesNumber: products.last_page,
      },
      data: products.data,
    };
    return formatedProducts;
  }

  public async findById(id: string) {
    const product = await this.findOne({ where: { id } });
    return product;
  }
}
