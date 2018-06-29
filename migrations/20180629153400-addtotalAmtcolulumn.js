'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
          'CartTables',
          'totalAmt',
          {
            type: Sequelize.INTEGER
          }
        )

      },

      down: (queryInterface, Sequelize) => {

        return queryInterface.removeColumn (
          'Carts',
          'totalAmt',
        )
      }
    };
