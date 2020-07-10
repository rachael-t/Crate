'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('productShipments',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        },
        allowNull: false
      },
      shipmentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'shipments',
          key: 'id'
        },
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
   queryInterface.dropTable('productShipments')
  }
};
