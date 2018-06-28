'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'CartTable',
      'UserId',
      {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'User',
          key: 'id'
        }
      }
    ).then(function() {
      return queryInterface.addColumn(
        'CartTable',
        'ProductId',
        {
          type: Sequelize.INTEGER,
          allowNull:false,
          references: {
            model: 'Products',
            key: 'id'
          }
        }
      )
    })


  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('CartTable', 'UserId').then(function() {
      return queryInterface.removeColumn('CartTable', 'ProductId')
    });

  }
};
