// App Imports
import models from '../../setup/models'
import params from '../../config/params'

// Get all shipments
export async function getByUser(parentValue, { userId }) {
    return await models.Shipment.findAll({
      where: {
        userId: userId
      },
      include: [
        { model: models.Subscription, as: 'subscription' },
        { model: models.Product, as: 'products' }
      ]
    })
  } 

// Create shipment
export async function create(parentValue, { subscriptionId }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Shipment.create({
      subscriptionId,
      userId: auth.user.id,
      deliveryDate
    })
  } else {
    throw new Error('Please login to subscribe to this crate.')
  }
}

// Update DeliveryDate
export async function update(parentValue, { id, deliveryDate }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.Shipment.update(
      {
        deliveryDate
      },
      { where: { id }}
    )
    return getById(parentValue, { id })
  }
}
