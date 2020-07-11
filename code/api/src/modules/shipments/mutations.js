// Imports
import { GraphQLInt } from 'graphql'

// App Imports
import ShipmentType from './types'
import { create } from './resolvers'

// Shipment create
export const shipmentCreate = {
  type: ShipmentType,
  args: {
    subscriptionId: {
      name: 'subscriptionId',
      type: GraphQLInt
    }
  },
  resolve: create
}
