'use strict'
import models from '../../setup/models'

// const { default: models } = require("../../setup/models");

// Shipments
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
  }, {
    hooks: {
      afterCreate: async (shipment) => {
        let subscriptionId = shipment.dataValues.subscriptionId
        let subId = await models.Subscription.findOne({ where: subscriptionId })
        let products = await models.Product.findAll({ where: { crateId: subId.dataValues.crateId } })
        let index = Math.floor(Math.random() * products.length);
        let product = products[index]

        return await models.ProductShipment.create({ productId: product.id, shipmentId: shipment.dataValues.id })

      }
    }
  })

  Shipment.associate = function(models) {
    Shipment.belongsTo(models.User)
    Shipment.belongsTo(models.Subscription)
    Shipment.belongsToMany(models.Product, { through: models.ProductShipment })
  }

  return Shipment
}
