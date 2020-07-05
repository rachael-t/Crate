'use strict'

// User
// Defines the user model with a name, email address, password, and role. Will
// likely want to add a uniquess attribut to the email.
// Per our track, we will need to add the following attributes: { image : { type:
// DataTypes.TEXT, description : DataTypes.STRING, address : DataTypes.STRING,
// state : DataTypes.TEXT, city : DataTypes.TEXT, zip : DataTypes.STRING}}
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
  })

// Our track requires us to show a user's deliveries a list of produts that have
// beeen delivered. Will likely need to create a new module called Deleveries and
// add a relationship to the User. I'm wondering if the shipping address info
// should actually live in the Delieveries module vs the Users module.
  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}
