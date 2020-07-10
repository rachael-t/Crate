'use strict'

// Subscription
module.exports = function(sequelize, DataTypes) {
  let Shipment = sequelize.define('shipments', {
    userId: {
      type: DataTypes.INTEGER
    },
    crateId: {
      type: DataTypes.INTEGER
    },
    deliveryDate: {
      type: DataTypes.DATE
    }
  })

  Shipment.associate = function(models) {
    Shipment.belongsTo(models.User)
    Shipment.belongsTo(models.Crate)
    Shipment.belongsToMany(models.Product, { through: models.ProductShipment })
  }

  return Shipment
}
