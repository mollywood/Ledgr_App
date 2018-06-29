'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
          'CartTables',
          'sessionID',
          {
            type: Sequelize.INTEGER
          }
        )

      },

      down: (queryInterface, Sequelize) => {

        return queryInterface.removeColumn (
          'CartsTable',
          'sessionID',
        )
      }
    };
