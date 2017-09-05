import { combineReducers } from 'redux'
import {
  SET_CREDENTIALS_EMAIL,
  SET_CREDENTIALS_PASSWORD,
  SIGNUP_EMAIL_REQUEST,
  SIGNUP_EMAIL_SUCCESS,
  SIGNUP_EMAIL_FAILURE
} from './action.types'




function credentials(
  state = {
    email: '',
    password: '',
  },
  action
) {
  switch(action.type) {
    case SET_CREDENTIALS_EMAIL:
      return {
        ...state,
        email: action.value,
      }
    case SET_CREDENTIALS_PASSWORD:
      return {
        ...state,
        password: action.value,
      }
    default:
      return state
  }
}

function signin(
  state = {
    sendingCredentials: false,
    user: null,
    loggedIn: false,
    errorCode: null,
    errorMessage: null,
  },
  action
) {
  switch(action.type) {
    case SIGNUP_EMAIL_REQUEST:
      return {
        ...state,
        sendingCredentials: true,
        errorCode: null,
        errorMessage: null,
      }
    case SIGNUP_EMAIL_SUCCESS:
      return {
        ...state,
        sendingCredentials: false,
        loggedIn: true,
        errorCode: null,
        errorMessage: null,
        user: action.user,
      }
    case SIGNUP_EMAIL_FAILURE:
      return {
        ...state,
        sendingCredentials: false,
        errorCode: action.err.code,
        errorMessage: action.err.message,
      }
    default:
      return state
  }
}

export default combineReducers({
  credentials,
  signin,
})
