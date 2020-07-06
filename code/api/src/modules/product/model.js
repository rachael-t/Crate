'use strict'

// Product
// This sets up the product model
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    // These are defining all the attributes that a product has
    name: {
      type: DataTypes.STRING
    },
    slug: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    type: {
      type: DataTypes.INTEGER
    },
    gender: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.TEXT
    }
  })
}
