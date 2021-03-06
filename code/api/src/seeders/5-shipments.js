'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('shipments', [
      {
        userId: 1,
        subscriptionId: 1,
        deliveryDate: '1/25/2001',
        createdAt: '1/20/2001',
        updatedAt: '1/20/2001'
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('shipments', null, {});
  }
}