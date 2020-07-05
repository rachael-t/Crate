// App Imports
import models from '../../setup/models'
import params from '../../config/params'

// Get crate by ID
// New function getById as the resolve for crateById. Preforms a query to
// find the provided crateId in the psql db. If found, it will return the crate
// object, if not, it will return an error message.
export async function getById(parentValue, { crateId }) {
  const crate = await models.Crate.findOne({ where: { id: crateId } })

  if (!crate) {
    // Crate does not exists
    throw new Error('The crate you are looking for does not exists or has been discontinued.')
  } else {
    return crate
  }
}

// Get all crates
// New function getAll that will return all crate objects in psql db and will
// order by the value in the orderBy argument in the crates object
export async function getAll(parentValue, { orderBy }) {
  return await models.Crate.findAll({ order: [['id', orderBy]] })
}

// Create crate
export async function create(parentValue, { name, description }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Crate.create({
      name,
      description
    })
  } else {
    throw new Error('Operation denied.')
  }
}

// Update crate
export async function update(parentValue, { id, name, description }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Crate.update(
      {
        name,
        description
      },
      {where: {id}}
    )
  } else {
    throw new Error('Operation denied.')
  }
}

// Delete crate
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Crate.destroy({where: {id}})
  } else {
    throw new Error('Operation denied.')
  }
}
