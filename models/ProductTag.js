const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product', // This is the name of the referenced model (Product in this case)
        key:'id',// This is the name of the referenced column (id in Product)
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model:'tag',// This is the name of the referenced model (Tag in this case)
        key:'id',// This is the name of the referenced column (id in Tag)

      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
