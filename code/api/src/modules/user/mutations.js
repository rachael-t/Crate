// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports -- types are the return values and resolvers contain the actual code to grab data from the database
import { UserType } from './types'
import { create, remove } from './resolvers'

// Create
export const userSignup = {
  // UserType here seems to be the potential return value that this mutation yields.
  type: UserType,
  // Lines like these define what arguments the query/mutation will accept and also define the data type as well as what it should be called
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
  // This line is telling graphql to use this resolver, from how I'm understanding it, create is like an alias for this method.
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

/* This file will need a mutation to allow the user to edit their email. I think that editing of all the user areas 
can be included in this update action.
*/