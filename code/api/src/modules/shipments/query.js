// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import ShipmentType from './types'
import { getByUser } from './resolvers'

// Shipments All
export const shipments = {
  type: new GraphQLList(ShipmentType),
  args: {
    userId: {
      name: 'userId',
      type: GraphQLInt
    }
  },
  resolve: getByUser
}
