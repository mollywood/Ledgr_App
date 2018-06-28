'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Products',
      'productCategoryID',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'productcategories',
          key: 'id'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Products',
      'productCategoryID'
    )
  }
};
