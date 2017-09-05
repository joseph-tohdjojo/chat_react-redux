import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'





function ChatRoom() {
  return (
    <section className='path-chatroom'>
      In the chatroom now
    </section>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    test: 'This is a test prop'
  }
}

export default withRouter(connect(
  mapStateToProps
)(ChatRoom))
