'use strict';

const params = require('../config/params');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name: 'Belt for Women',
        slug: 'belt-for-women',
        description: 'A very nice belt for women.',
        crateId: 1,
        type: params.product.types.accessory.id,
        gender: params.user.gender.female.id,
        image: '/images/stock/belt-female.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Belt for Men',
        slug: 'belt-for-men',
        description: 'A very nice belt for men.',
        crateId: 3,
        type: params.product.types.accessory.id,
        gender: params.user.gender.male.id,
        image: '/images/stock/belt-male.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Watch for Women',
        slug: 'watch-for-women',
        description: 'A very nice watch for women.',
        crateId: 4,
        type: params.product.types.accessory.id,
        gender: params.user.gender.female.id,
        image: '/images/stock/watch-female.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Watch for Men',
        slug: 'watch-for-men',
        description: 'A very nice watch for men.',
        crateId: 3,
        type: params.product.types.accessory.id,
        gender: params.user.gender.male.id,
        image: '/images/stock/watch-male.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'T-Shirt for Women - Black',
        slug: 't-shirt-for-women-black',
        description: 'A very nice black t-shirt for women.',
        crateId: 2,
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: '/images/stock/t-shirt-female-1.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'T-Shirt for Women - Grey',
        slug: 't-shirt-for-women-grey',
        description: 'A very nice grey t-shirt for women.',
        crateId: 2,
        type: params.product.types.cloth.id,
        gender: params.user.gender.female.id,
        image: '/images/stock/t-shirt-female-2.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'T-Shirt for Men - White',
        slug: 't-shirt-for-men-white',
        description: 'A very nice white t-shirt for men.',
        type: params.product.types.cloth.id,
        crateId: 1,
        gender: params.user.gender.male.id,
        image: '/images/stock/t-shirt-male-1.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'T-Shirt for Men - Grey',
        slug: 't-shirt-for-men-grey',
        description: 'A very nice grey t-shirt for men.',
        crateId: 1,
        type: params.product.types.cloth.id,
        gender: params.user.gender.male.id,
        image: '/images/stock/t-shirt-male-2.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Belt for Women',
        slug: 'belt-for-women',
        description: 'A very nice belt for women.',
        crateId: 6,
        type: params.product.types.accessory.id,
        gender: params.user.gender.female.id,
        image: '/images/stock/belt-female.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Belt for Men',
        slug: 'belt-for-men',
        description: 'A very nice belt for men.',
        crateId: 5,
        type: params.product.types.accessory.id,
        gender: params.user.gender.male.id,
        image: '/images/stock/belt-male.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
}
