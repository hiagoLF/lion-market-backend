import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Product } from "../entities/Products";

export default class CreateProducts implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Product)().createMany(1000)
  }
}