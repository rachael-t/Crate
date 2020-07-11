// Imports
import { GraphQLInt, GraphQLString} from 'graphql'

// App Imports
import ShipmentType from './types'
import { create, update } from './resolvers'

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

// Delivery Date Update
export const deliveryUpdate = {
  type: ShipmentType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    deliveryDate: {
      name: 'deliveryDate',
      type: GraphQLString
    }
  },
  resolve: update
}
