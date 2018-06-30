'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.changeColumn(
          'Sales',
          'sessionID',
          {
            type: Sequelize.STRING
          }
        )

      },

      down: (queryInterface, Sequelize) => {

        return queryInterface.changeColumn (
          'Sales',
          'sessionID',
          {
            type : Sequelize.INTEGER
          }
        )
      }
    };
