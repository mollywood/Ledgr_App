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
    CartTable.belongsTo(models.User, {as:'User', foreignKey:'id'}),
    CartTable.hasMany(models.Products, {as:'Products', foreignKey:'id'}),
    CartTable.belongsTo(models.Sales, {as:'Sales', foreignKey:'id'})

  };
  return CartTable;
};
