'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sales = sequelize.define('Sales', {
    UserId: DataTypes.INTEGER,
    orderReference: DataTypes.STRING,
    Quantity: DataTypes.INTEGER,
    Total: DataTypes.INTEGER,
    sessionID : DataTypes.INTEGER
  }, {});
  Sales.associate = function(models) {
    // associations can be defined here
  };
  return Sales;
};
