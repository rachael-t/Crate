'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('users', 'address', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('users', 'city', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('users', 'state', {
        type: Sequelize.TEXT
      }),
      queryInterface.addColumn('users', 'zip', {
        type: Sequelize.STRING
      })
    ];
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'address')
    return queryInterface.removeColumn('users', 'city')
    return queryInterface.removeColumn('users', 'state')
    return queryInterface.removeColumn('users', 'zip')
  }
};
