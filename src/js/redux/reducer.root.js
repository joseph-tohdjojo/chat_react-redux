import { combineReducers } from 'redux'

import { chatroom } from './reducer.chats'
import {
  SIGNIN_GOOGLE_REQUEST,
  SIGNIN_GOOGLE_SUCCESS,
  SIGNIN_GOOGLE_FAILURE
} from './action.types'





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
    case SIGNIN_GOOGLE_REQUEST:
      return {
        ...state,
        sendingCredentials: true,
        user: null,
        loggedIn: false,
        errorCode: null,
        errorMessage: null,
      }
    case SIGNIN_GOOGLE_SUCCESS:
      return {
        ...state,
        sendingCredentials: false,
        user: action.user.user,
        loggedIn: true,
      }
    default:
      return state
  }
}

export default combineReducers({
  signin,
  chatroom,
})
