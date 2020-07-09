// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from '../user/types'
import CrateType from '../crate/types'

// Shipment type
const ShipmentType = new GraphQLObjectType({
  name: 'shipment',
  description: 'Shipment Type',

  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: UserType },
    crate: { type: CrateType },
    deliveryDate: { type: GraphQLString},
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default ShipmentType
