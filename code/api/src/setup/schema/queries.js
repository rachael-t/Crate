// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as user from '../../modules/user/query'
import * as product from '../../modules/product/query'
import * as crate from '../../modules/crate/query'
import * as subscription from '../../modules/subscription/query'
// Thinking we will need to import our new deliveries query

// Query
const query = new GraphQLObjectType({
  name: 'query',
  description: 'API Queries [Read]',

  fields: () => ({
    ...user,
    ...product,
    ...crate,
    ...subscription
    // and we'll need to add them here? Not sure what this is doing to be honest.
    // Looks like the spread operator within an object, so maybe it's creating like
    // User : [user, users, ...]
  })
})

export default query
