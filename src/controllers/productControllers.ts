import { Request, Response } from "express";
import { createProduct } from "../services/product/createProduct";
import { findProducts } from "../services/product/findProducts";
import { updateProduct } from "../services/product/updateProduct";

export const productControllers = {
  findProductsPaginated: async (req: Request, res: Response) => {
    const { title, page } = req.query;
    const products = await findProducts(
      Number(page),
      title ? String(title) : ""
    );
    return res.json(products);
  },

  createProduct: async (req: Request, res: Response) => {
    const data = req.body;
    const newProduct = await createProduct(data);
    return res.status(200).json({ id: newProduct.id });
  },

  updateProduct: async (req: Request, res: Response) => {
    const { productId } = req.params;
    const data = req.body
    await updateProduct(productId, data)
    return res.sendStatus(200)
  },
};
