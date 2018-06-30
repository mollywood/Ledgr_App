'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.renameColumn(
      'Sales',
      'ProductId',
      'orderReference',
      {
        type:Sequelize.STRING,
      }
    )

    queryInterface.removeColumn(
      'Sales',
      'Price',
    )

    queryInterface.removeColumn(
      'Sales',
      'Quantity',
    )


  },

  down: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
     'Sales',
     'Price',
     {
       type: Sequelize.INTEGER
     }
   )

   queryInterface.addColumn(
    'Sales',
    'Quantity',
    {
      type: Sequelize.INTEGER,
    }
  )

  }
};
