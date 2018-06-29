'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Sales',
      'CartId',
      {
        type:Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'CartTables',
          key: 'id'
        }
      }
    )


  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Sales', 'CartId')
  }
};
