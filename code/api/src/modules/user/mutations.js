// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from './types'
import { create, remove, update } from './resolvers'

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

// Update

export const userUpdate = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    name: {
      name: 'name',
      type: GraphQLString
    },

    image: {
      name: 'image',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    },

    address: {
      name: 'address',
      type: GraphQLString
    },

    state: {
      name: 'state',
      type: GraphQLString
    },

    city: {
      name: 'city',
      type: GraphQLString
    },

    zip: {
      name: 'zip',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    }
  },
  resolve: update
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
