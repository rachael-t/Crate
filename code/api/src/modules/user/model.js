'use strict'

// User -- this is similar to models in rails
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    // This is defining all the attributes that a user has
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
  // This is where relationships are defined for the model to be able to get the products, we'll have to build out relationships here
  User.associate = function(models) {
    // this appears to set up a one to many relationship
    User.hasMany(models.Subscription)
  }

  return User
}

/* For this file we will have to add a couple more attributes to the user model including a description and a url image 
*/