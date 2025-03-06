const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const percentage = Joi.number().min(0).max(100);
const productId = Joi.number().integer();

const createDiscountSchema = Joi.object({
  name: name.required(),
  percentage: percentage.required(),
  productId: productId.required(),
});

const updateDiscountSchema = Joi.object({
  name: name,
  percentage: percentage,
  productId: productId,
});

const getDiscountSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createDiscountSchema,
  updateDiscountSchema,
  getDiscountSchema,
};
