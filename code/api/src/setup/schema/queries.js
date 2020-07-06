// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports -- This is importing all the queries from their respective files
import * as user from '../../modules/user/query'
import * as product from '../../modules/product/query'
import * as crate from '../../modules/crate/query'
import * as subscription from '../../modules/subscription/query'

// Query
// This is telling graphql what models support queries. This allows the queries to just be changed in one place
const query = new GraphQLObjectType({
  name: 'query',
  description: 'API Queries [Read]',

  // For examples a shipment model would be added here
  fields: () => ({
    ...user,
    ...product,
    ...crate,
    ...subscription
  })
})

export default query
/* Any new queries if a table/model is added will have to be included here. As mentioned in the mutations file we may
add a shipments and shipmentProducts table which would connect the user to all the products that were shipped. If so, any queries we 
write will need to be included here */