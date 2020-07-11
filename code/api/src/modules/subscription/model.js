'use strict'
import { create } from '../shipments/resolvers'
import models from '../../setup/models'

// Subscription
module.exports = function(sequelize, DataTypes) {
  let Subscription = sequelize.define('subscriptions', {
    userId: {
      type: DataTypes.INTEGER
    },
    crateId: {
      type: DataTypes.INTEGER
    }
  }, {
      hooks: {
        afterCreate: async (subscription) => {
          let user = subscription.dataValues.userId;
          let subscriptionId = subscription.dataValues.id;
          let date = new Date(new Date().getTime()+(5*24*60*60*1000))

          models.Shipment.create({ userId: user, subscriptionId: subscriptionId, deliveryDate: date })
        }
      }
    }
  );

  Subscription.associate = function(models) {
    Subscription.belongsTo(models.User)
    Subscription.belongsTo(models.Crate)
  }

  return Subscription
}
