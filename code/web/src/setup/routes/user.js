// App Imports
import Login from '../../modules/user/Login'
import Signup from '../../modules/user/Signup'
import Profile from '../../modules/user/Profile'
import Subscriptions from '../../modules/user/Subscriptions'

// User routes

//the user routes shown below are responsible for rendering all of the Components, based on
//the relative path of the user as seen in path:'/users/login' & component:'Login'

// THESE routes: will need to be added to so that the route reflects the user's
// actions for example edit: '/users/edit' — where the user can edit their profile
// or products: '/users/products' — where the user can see all of their kept or returned products

export default {
  login: {
    path: '/user/login',
    component: Login
  },

  signup: {
    path: '/user/signup',
    component: Signup
  },

  profile: {
    path: '/user/profile',
    component: Profile,
    auth: true
  },

  subscriptions: {
    path: '/user/subscriptions',
    component: Subscriptions,
    auth: true
  }
}
