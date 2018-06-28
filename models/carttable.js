'use strict';
module.exports = (sequelize, DataTypes) => {
  var CartTable = sequelize.define('CartTable', {
    ProductName: DataTypes.STRING,
    ProductSize: DataTypes.STRING,
    ProductPrice: DataTypes.INTEGER,
    ProductColor: DataTypes.STRING,
    Quantity: DataTypes.INTEGER
  }, {});
  CartTable.associate = function(models) {
    // associations can be defined here
  };
  return CartTable;
};
