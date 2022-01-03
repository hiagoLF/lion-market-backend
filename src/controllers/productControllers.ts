import { Request, Response } from "express";
import { getCustomRepository, getRepository, Like } from "typeorm";
import { ProductRepository } from "../repositorires/ProductRepository";

export const productControllers = {
  findProductsPaginated: async (req: Request, res: Response) => {
    const { title, page } = req.query;
    const productRepo = getCustomRepository(ProductRepository);
    const products = await productRepo.findAllPaginated(Number(page), title ? String(title) : '');
    return res.json(products);
  },
};
