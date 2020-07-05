// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from './types'
import { create, remove } from './resolvers'

// Create
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create
}

// Remove
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}

// will need a userEdit mutation. Something like:
// export const userEdit = {
//  type: UserType,
//  args: {
//    id: {
//      name: 'id'.
//      type: GraphQLInt
//    }
//    address: {
//      name: 'address',
//      type: GraphQLString
//    }
//  }...,
//  resolve: update
// }
