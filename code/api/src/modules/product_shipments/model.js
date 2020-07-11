'use strict'

// Products for all Shipments
module.exports = function (sequelize, DataTypes) {
  let ProductShipment = sequelize.define('product_shipments', {
    productId: {
      type: DataTypes.INTEGER
    },
    shipmentId: {
      type: DataTypes.INTEGER
    },
    returned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })

  return ProductShipment
}