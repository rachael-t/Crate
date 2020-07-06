// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as user from '../../modules/user/mutations'
import * as product from '../../modules/product/mutations'
import * as crate from '../../modules/crate/mutations'
import * as subscription from '../../modules/subscription/mutations'

// Mutation
// This is telling graphql what models have mutations that can be used. If another table/model is created we'll have to add it to the fields below
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: 'API Mutations [Create, Update, Delete]',

  fields: {
    ...user,
    ...product,
    ...crate,
    ...subscription
  }
})

export default mutation

/*
We were thinking of creating a shipments table and shipmentsProducts table to connect the user to his shipped products. 
If so we'll need to import any mutations we right at the top of this file.
*/