import { celebrate, Joi, Segments } from "celebrate";

export const findProductsValidator = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number().required(),
    title: Joi.string(),
  }),
});

export const createProductValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().min(2).max(40).required(),
    description: Joi.string().min(5).max(300).required(),
    price: Joi.number().required(),
  }),
});

export const updateProductValidator = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    productId: Joi.string().required(),
  }),
  [Segments.BODY]: Joi.object()
    .keys({
      title: Joi.string().min(2).max(40),
      description: Joi.string().min(5).max(300),
      price: Joi.number(),
    })
    .min(1),
});

export const findProductByIdValidator = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    productId: Joi.string().required(),
  }),
});

export const deleteProductValidator = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    productId: Joi.string().required(),
  }),
});

export const updateProductImageValidator = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    productId: Joi.string().required(),
  }),
});
