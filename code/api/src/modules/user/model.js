'use strict'

// User
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
    },
    description: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.TEXT
    },
    city: {
      type: DataTypes.STRING
    },
    zip: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=939&q=80"
    }
  })

  User.associate = function(models) {
    User.hasMany(models.Subscription)
    User.hasMany(models.Shipment, { onDelete: 'cascade', hooks: true })
  }

  return User
}
