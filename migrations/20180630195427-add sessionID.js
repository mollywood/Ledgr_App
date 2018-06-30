'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
          'Sales',
          'sessionID',
          {
            type: Sequelize.INTEGER
          }
        )

      },

      down: (queryInterface, Sequelize) => {

        return queryInterface.removeColumn (
          'Sales',
          'sessionID',
        )
      }
    };
