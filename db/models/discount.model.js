const { Sequelize, Model, DataTypes } = require('sequelize');
const { PRODUCT_TABLE } = require('./product.model');

const DISCOUNT_TABLE = 'discounts';

const DiscountSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  percentage: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: true, // ✅ Cambiado a true
    field: 'product_id',
    references: {
      model: PRODUCT_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class Discount extends Model {
  static associate(models) {
    this.belongsTo(models.Product, { as: 'product' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DISCOUNT_TABLE,
      modelName: 'Discount',
      timestamps: false,
    };
  }
}

module.exports = { DISCOUNT_TABLE, Discount, DiscountSchema };
