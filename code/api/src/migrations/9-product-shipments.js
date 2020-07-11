module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('product_shipments',{
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

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('product_shipments')
  }
};
