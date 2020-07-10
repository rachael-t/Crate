// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import { ProductType } from '../products/types'
import { ShipmentType } from '../shipments/types'

// Prodct Shipment type
const ProductShipmentType = new GraphQLObjectType({
  name: 'product_shipment',
  description: 'Product Shipment Type',

  fields: () => ({
    id: { type: GraphQLInt },
    product: { type: ProductType },
    shipment: { type: ShipmentType },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default ProductShipmentType