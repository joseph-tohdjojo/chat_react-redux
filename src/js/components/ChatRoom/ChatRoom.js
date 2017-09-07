import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { database } from '../../utils/firebase'

import {
  setMessageToSend,
  sendMessageToFirebase
} from '../../redux/action.creators'





class ChatRoom extends Component {
  constructor(props) {
    super(props)

    this.chatMessageSubmitHandler = this.chatMessageSubmitHandler.bind(this)
    this.onChatInputChange = this.onChatInputChange.bind(this)
  }

  componentDidMount() {
    // console.log('mounted');
  }

  chatMessageSubmitHandler(ev) {
    ev.preventDefault()
    this.props.sendChatMessageToFirebase(this.props.messageToSend)
      .then(response => {
        console.log(response)
        this.props.setChatMessageToSend('')
      })
  }

  onChatInputChange(ev) {
    this.props.setChatMessageToSend(ev.target.value)
  }

  render() {
    const chatMessages = [
      (
        <div className='chat-message t-bodycopy' key='0'>
          <div className='t-legal'>
            Username @ 12:42 PM
          </div>
          this is the first example chat message
        </div>
      ),
      (
        <div className='chat-message t-bodycopy my-message' key='1'>
          <div className='t-legal'>
            Username @ 12:42 PM
          </div>
          this is an example chat message2 that is a lot longer than most
        </div>
      ),
      (
        <div className='chat-message t-bodycopy' key='21'>
          <div className='t-legal'>
            Username @ 12:42 PM
          </div>
          this is an example chat message3
        </div>
      ),
    ]

    return (
      <section className='section-main path-chatroom'>

        <div className='chat-messages'>
          <div className='messages-container'>
            { chatMessages.reverse() }
          </div>
        </div>

        <form
          className='chat-input'
          onSubmit={ this.chatMessageSubmitHandler }
        >
          <input
            className='t-legal'
            type='text'
            placeholder='Start chatting!'
            onChange={ this.onChatInputChange }
            value={ this.props.messageToSend }
          />
        </form>

      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { messageToSend, messages } = state.chatroom
  return {
    messageToSend,
    messages,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setChatMessageToSend(message) {
      dispatch(setMessageToSend(message))
    },
    sendChatMessageToFirebase(message) {
      dispatch(sendMessageToFirebase(message))
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatRoom))
