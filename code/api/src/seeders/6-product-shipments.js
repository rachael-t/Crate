'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('product_shipments', [
      {
        productId: 1,
        shipmentId: 1,
        returned: false
      },
      {
        productId: 2,
        shipmentId: 1,
        returned: true
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('product_shipments', null, {});
  }
}