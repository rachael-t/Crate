// Imports

// App Imports
import {
  SUBSCRIPTIONS_GET_LIST_REQUEST,
  SUBSCRIPTIONS_GET_LIST_RESPONSE,
  SUBSCRIPTIONS_GET_LIST_FAILURE,
  SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST,
  SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE,
  SUBSCRIPTIONS_GET_LIST_BY_USER_FAILURE,
  SUBSCRIPTIONS_GET_REQUEST,
  SUBSCRIPTIONS_GET_RESPONSE,
  SUBSCRIPTIONS_GET_FAILURE,
} from './actions'

// Subscriptions list

// Initial State
const subscriptionsInitialState = {
  isLoading: false,
  error: null,
  list: []
}

// State
export const subscriptions = (state = subscriptionsInitialState, action) => {
  switch (action.type) {
    case SUBSCRIPTIONS_GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case SUBSCRIPTIONS_GET_LIST_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        list: action.list
      }

    case SUBSCRIPTIONS_GET_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}

// Subscriptions list by user

// Initial State
const subscriptionsByUserInitialState = {
  isLoading: false,
  error: null,
  list: []
}

// Rachael - I think this is the reducer associated with the action objects that are dispatched from the actions.js file that are relevant to the subscription updates we will be making for our track. This will take in the action object and based on the type (i.e. SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST) returns the pieces of state from the store that are related/specific to the request/change we want to make.  
// State
export const subscriptionsByUser = (state = subscriptionsByUserInitialState, action) => {
  switch (action.type) {
    case SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        list: action.list
      }

    case SUBSCRIPTIONS_GET_LIST_BY_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}

// Single subscription

// Initial State
const subscriptionInitialState = {
  isLoading: false,
  error: null,
  item: {}
}

// State
export const subscription = (state = subscriptionInitialState, action) => {
  switch (action.type) {
    case SUBSCRIPTIONS_GET_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case SUBSCRIPTIONS_GET_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        item: action.item
      }

    case SUBSCRIPTIONS_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}