'use strict'

// Products for all Shipments
module.exports = function (sequelize, DataTypes) {
  let ProductShipment = sequelize.define('productShipments', {
    productId: {
      type: DataTypes.INTEGER
    },
    shipmentId: {
      type: DataTypes.INTEGER
    }
  })

  return ProductShipment
}