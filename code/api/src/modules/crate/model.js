'use strict'

// similar to a RoR Model. Creates Crate class with name and
// description attributes
module.exports = function(sequelize, DataTypes) {
  let Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })

// creates the relationship between Crates and Subscriptions
  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription)
  }

  return Crate
}
