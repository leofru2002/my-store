const boom = require('boom');
const { models } = require('../libs/sequelize');

class DiscountService {
  constructor() {}

  async create(data) {
    const newDiscount = await models.Discount.create(data);
    return newDiscount;
  }

  async find() {
    const discounts = await models.Discount.findAll();
    return discounts;
  }

  async findOne(id) {
    const discount = await models.Discount.findByPk(id);
    if (!discount) {
      throw boom.notFound('Discount not found');
    }
    return discount;
  }

  async update(id, changes) {
    const discount = await models.Discount.findByPk(id);
    if (!discount) {
      throw boom.notFound('Discount not found');
    }
    const updatedDiscount = await discount.update(changes);
    return updatedDiscount;
  }

  async delete(id) {
    const discount = await models.Discount.findByPk(id);
    if (!discount) {
      throw boom.notFound('Discount not found');
    }
    await discount.destroy();
    return { id };
  }
}

module.exports = DiscountService;
