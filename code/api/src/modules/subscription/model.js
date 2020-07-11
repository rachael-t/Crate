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

          for(let i = 1; i < 13; i++){
            models.Shipment.create({ userId: user, subscriptionId: subscriptionId, deliveryDate: date })
            date = new Date(new Date().getTime()+(30*i*24*60*60*1000))
          }
        }
      }
    }
  );

  Subscription.associate = function(models) {
    Subscription.belongsTo(models.User)
    Subscription.belongsTo(models.Crate)
    Subscription.hasMany(models.Shipment)
  }

  return Subscription
}
