'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('productShipments', 'returned', {
      type: Sequelize.BOOLEAN
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('productShipments', 'returned')
  }
};
