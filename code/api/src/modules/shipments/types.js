// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from '../user/types'
import SubscriptionType from '../subscription/types'

// Shipment type
const ShipmentType = new GraphQLObjectType({
  name: 'shipment',
  description: 'Shipment Type',

  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: UserType },
    subscription: { type: SubscriptionType },
    deliveryDate: { type: GraphQLString},
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default ShipmentType
