import { auth, database } from '../utils/firebase'
import {
  SIGNIN_GOOGLE_REQUEST,
  SIGNIN_GOOGLE_SUCCESS,
  SIGNIN_GOOGLE_FAILURE,
  SET_MESSAGE_TO_SEND,
  POST_TO_CHATROOM_REQUEST,
  POST_TO_CHATROOM_SUCCESS
} from './action.types'

export function signInWithProvider(providerType) {
  return (dispatch, getState) => {
    let provider

    switch(providerType) {
      case 'google':
        provider = new auth.GoogleAuthProvider()
        break;
      default:
        return
    }

    dispatch({
      type: SIGNIN_GOOGLE_REQUEST,
    })

    auth().signInWithPopup(provider)
      .then(user => {
        console.log(user);
        dispatch({
          type: SIGNIN_GOOGLE_SUCCESS,
          user,
        })
      })
  }
}

export function setMessageToSend(message) {
  return {
    type: SET_MESSAGE_TO_SEND,
    message,
  }
}





function postToChatroomRequest() {
  return {
    type: POST_TO_CHATROOM_REQUEST,
  }
}

function postToChatroomSuccess(response) {
  return {
    type: POST_TO_CHATROOM_SUCCESS,
    response
  }
}

export function sendMessageToFirebase(message) {
  // console.log();
  return dispatch => {
    dispatch(postToChatroomRequest())

    const messageData = {
      message
    }

    const newMessageKey = database().ref().child('messages').push().key;
    console.log(newMessageKey);

    var updates = {};
    updates['/messages/' + newMessageKey] = messageData

    return database().ref().update(updates)
      .then(response => {
        console.log(response);
      })
  }
}
