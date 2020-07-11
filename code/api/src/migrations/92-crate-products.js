'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('products', 'crateId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'crates',
        key: 'id'
      },
      allowNull: false
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('products', 'crateId')
  }
};
