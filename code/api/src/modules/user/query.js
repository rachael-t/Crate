// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import { UserType, UserLoginType, UserGenderType } from './types'
import { getAll, getById, login, getGenders } from './resolvers'

// All
// This returns all users
export const users = {
  // This is saying that the return value will be a list of the User Type defined in types
  type: new GraphQLList(UserType),
  // This is the resolver and is what is called when running the query
  resolve: getAll
}

// By ID
// This returns one user by ID
export const user = {
  type: UserType,
  args: {
    id: { type: GraphQLInt }
  },
  // Same idea as query above
  resolve: getById
}

// Auth
export const userLogin = {
  // This specifies what can be returned and is defined in the types.js
  type: UserLoginType,
  args: {
    // These are all the variables that the query accepts
    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    },

    role: {
      name: 'role',
      type: GraphQLString
    }
  },
  resolve: login
}

// Genders
// Returns all genders
export const userGenders = {
  // Again here the return will be a list full of the user gender type defined in types.js
  type: new GraphQLList(UserGenderType),
// This is function to call in the gql interface/api calls
  resolve: getGenders
}
