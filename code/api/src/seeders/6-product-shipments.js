'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('product_shipments', [
      {
        productId: 1,
        shipmentId: 1,
        returned: false,
        createdAt: '1/1/2001',
        updatedAt: '2/3/2005'
      },
      {
        productId: 2,
        shipmentId: 1,
        returned: true,
        createdAt: '1/1/2001',
        updatedAt: '2/3/2005'
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('product_shipments', null, {});
  }
}