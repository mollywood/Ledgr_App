'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.changeColumn(
          'CartTables',
          'sessionID',
          {
            type: Sequelize.STRING
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
