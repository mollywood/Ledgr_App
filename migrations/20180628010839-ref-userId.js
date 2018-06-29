'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     queryInterface.addColumn(
      'CartTables',
      'UserId',
      {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'Users',
          key: 'id'
        }
      }
    )

       queryInterface.addColumn(
        'CartTables',
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



  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('CartTables', 'UserId')
    queryInterface.removeColumn('CartTables', 'ProductId')


  }
};
