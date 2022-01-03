import { celebrate, Joi, Segments } from "celebrate";

export const loginUserValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    login: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(3).max(30).required(),
  }),
});

