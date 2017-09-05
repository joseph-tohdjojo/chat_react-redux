import { auth } from '../utils/firebase'
import {
  SET_CREDENTIALS_EMAIL,
  SET_CREDENTIALS_PASSWORD,
  SIGNUP_EMAIL_REQUEST,
  SIGNUP_EMAIL_SUCCESS,
  SIGNUP_EMAIL_FAILURE
} from './action.types'

export function setInputValue(input) {
  switch(input.type) {
    case 'email':
      return {
        type: SET_CREDENTIALS_EMAIL,
        value: input.value,
      }
    case 'password':
      return {
        type: SET_CREDENTIALS_PASSWORD,
        value: input.value
      }
    default:
      return
  }
}

export function startEmailSignup(credentials) {
  return function(dispatch) {
    const { email, password } = credentials
    dispatch({
      type: SIGNUP_EMAIL_REQUEST,
    })

    auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({
          type: SIGNUP_EMAIL_SUCCESS,
          user,
        })
      }, err => {
        dispatch({
          type: SIGNUP_EMAIL_FAILURE,
          err,
        })
      })
      // .catch(err => {
      //
      // })
  }
}
