import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from '../actions/actionTypes'

const initialState = {
  isFetching: false,
  isAuthenticated: false,
}

const user = (state = initialState, action) => {
  const { type, isFetching, isAuthenticated, credentials, error } = action
  switch(type) {
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST:
    case LOGOUT_REQUEST:
      return { ...state, isFetching, isAuthenticated }
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
    case LOGOUT_SUCCESS:
      return { ...state, isFetching, isAuthenticated, credentials }
    case LOGIN_ERROR:
    case SIGNUP_ERROR:
    case LOGOUT_ERROR:
      return { ...state, isFetching, isAuthenticated, error }
    default:
      return state
  }
}

export default user
