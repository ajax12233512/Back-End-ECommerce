const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    //Note From yourself Neil: CHeck to see which stuff from the database actually refer to specifically so you dont f*** it up
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'product',
      //   key: 'id'
      // }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: 'tag',
      //   key: 'id'
      // }
    }
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