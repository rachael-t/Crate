'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // const subscrtions = await queryInterface.sequelize.query(
    //   `SELECT id from COURSES;`
    // );
    return queryInterface.bulkInsert('subscriptions', [
      {
        userId: 1,
        crateId: 1,
        createdAt: '1/20/2001',
        updatedAt: '1/20/2001'
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('shipments', null, {});
  }
}