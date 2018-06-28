'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Sale',
      'CartId',
      {
        type.Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'CartTable',
          key: 'id'
        }
      }
    )


  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Sale', 'CartId')
  }
};
