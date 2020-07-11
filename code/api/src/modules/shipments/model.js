'use strict'

// Subscription
module.exports = function(sequelize, DataTypes) {
  let Shipment = sequelize.define('shipments', {
    userId: {
      type: DataTypes.INTEGER
    },
    subscriptionId: {
      type: DataTypes.INTEGER
    },
    deliveryDate: {
      type: DataTypes.DATE
    }
  })

  Shipment.associate = function(models) {
    Shipment.belongsTo(models.User)
  }

  return Shipment
}
