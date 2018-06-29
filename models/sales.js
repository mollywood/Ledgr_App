'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sales = sequelize.define('Sales', {
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    Price: DataTypes.INTEGER,
    Quantity: DataTypes.INTEGER,
    Total: DataTypes.INTEGER
  }, {});
  Sales.associate = function(models) {
    // associations can be defined here
  };
  return Sales;
};