// Imports
import bcrypt from 'bcrypt' 
// jsonwebtoken is used to securely tranfer information via json and is useful for authorization
import jwt from 'jsonwebtoken'

// App Imports
import serverConfig from '../../config/server'
import params from '../../config/params'
import models from '../../setup/models'

// Create
export async function create(parentValue, { name, email, password }) {
  // Users exists with same email check
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    // This is telling the program to encrypt the users password
    const passwordHashed = await bcrypt.hash(password, serverConfig.saltRounds)

    // This is creating a new user from the user model
    return await models.User.create({
      name,
      email,
      password: passwordHashed
    })
  } else {
    // User exists -- checks if the email entered in already is in the system
    throw new Error(`The email ${ email } is already registered. Please try to login.`)
  }
}
// Functions like this are in the resolvers contain all the logic needed to execute the graphql queries/mutations
export async function login(parentValue, { email, password }) {
  // So here the user is found by email
  const user = await models.User.findOne({ where: { email } })

  // Then he deals with not finding a user in the database
  if (!user) {
    // User does not exists
    throw new Error(`We do not have any user registered with ${ email } email address. Please signup.`)
  } else {
    // This then returns all of the users details if the user is found, you need this because the password is stored on the user
    const userDetails = user.get()

    // User exists -- check to see if passwords match
    const passwordMatch = await bcrypt.compare(password, userDetails.password)

    if (!passwordMatch) {
      // Incorrect password
      throw new Error(`Sorry, the password you entered is incorrect. Please try again.`)
    } else {
      const userDetailsToken = {
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        role: userDetails.role
      }

      return {
        // This is the response returned 
        user: userDetails,
        // Token is returning a secure json of the user details, as well as the api ke
        token: jwt.sign(userDetailsToken, serverConfig.secret)
      }
    }
  }
}

// Get by ID
// Returns one user by ID
export async function getById(parentValue, { id }) {
  // finds user by id
  return await models.User.findOne({ where: { id } })
}

// Get all
// finds all user
export async function getAll() {
  // reuturns all user, doesn't require input
  return await models.User.findAll()
}

// Delete
export async function remove(parentValue, { id }) {
  // Destroys a user
  return await models.User.destroy({ where: { id } })
}

// User genders
export async function getGenders() {
  // Finds all the users gender by pulling the gender values off of all the users
  return Object.values(params.user.gender)
}


/* 
We'll need to add a resolver for editing the user's information here that will be held in the mutation.
*/