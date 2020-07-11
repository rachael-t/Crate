'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('product_shipments', 'returned', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('product_shipments', 'returned')
  }
};
