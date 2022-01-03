import { define } from "typeorm-seeding";
import { Product } from "../entities/Products";
import Faker from "faker";

define(Product, (faker: typeof Faker) => {
  const product = new Product();

  product.title = faker.commerce.productName();
  product.description = faker.lorem.sentence(30);
  product.price = Number(faker.commerce.price(100, 3000));
  product.imageUrl = faker.image.business();

  return product;
});
