import {
  SET_MESSAGE_TO_SEND,
} from './action.types'





export function chatroom(
  state = {
    roomId: 'room_001',
    messageToSend: '',
    messages: [],
  },
  action
) {
  switch(action.type) {
    case SET_MESSAGE_TO_SEND:
      return {
        ...state,
        messageToSend: action.message,
      }
    default:
      return state
  }
}
