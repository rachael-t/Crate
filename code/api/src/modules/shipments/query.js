// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import ShipmentType from './types'
import { getAll } from './resolvers'

// Shipments All
export const shipments = {
  type: new GraphQLList(ShipmentType),
  resolve: getAll
}
