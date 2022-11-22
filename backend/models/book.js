'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init({
    Title: DataTypes.STRING,
    Category: DataTypes.STRING,
    Author: DataTypes.STRING,
    Images: DataTypes.STRING,
    Synopsis: DataTypes.STRING(1000)
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};