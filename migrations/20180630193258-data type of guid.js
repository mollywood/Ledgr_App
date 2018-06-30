'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.changeColumn(
          'Sales',
          'orderReference',
          {
            type: Sequelize.STRING
          }
        )

      },

      down: (queryInterface, Sequelize) => {

        return queryInterface.changeColumn (
          'Sales',
          'orderReference',
          {
            type : Sequelize.INTEGER
          }
        )
      }
    };
