import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { startEmailSignup, signInWithProvider } from '../../redux/action.creators'

// components
import Input from '../Input/Input'





class Login extends Component {
  constructor() {
    super()

    this.redirectToChatroom = this.redirectToChatroom.bind(this)
    this.googleClickHandler = this.googleClickHandler.bind(this)
  }

  componentDidMount() {
    if(this.props.loggedIn) {
      this.redirectToChatroom()
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loggedIn) {
      this.redirectToChatroom()
    }
  }

  redirectToChatroom() {
    this.props.history.push('/chatroom')
  }

  googleClickHandler(ev) {
    ev.preventDefault()

    this.props.signInSignUpWithProvider('google')
  }

  render() {
    const {
      email,
      password,
      errorMessage,
      createEmailAccount,
      sendingCredentials,
      ...props
    } = this.props

    return (
      <section className='section-main path-login'>
        <div className='loginForm'>

          <h2 className='signup t-h2'>
            Sign Up / Login
          </h2>
          <h3 className='signup t-h3'>
            { errorMessage }
          </h3>

          <button
            className='t-subhead'
            type='button'
            onClick={ this.googleClickHandler }
            style={{ margin: '0 auto' }}
          >
            Signup with Google
          </button>

        </div>
      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    errorMessage: state.signin.errorMessage,
    loggedIn: state.signin.loggedIn,
    sendingCredentials: state.signin.sendingCredentials,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signInSignUpWithProvider(providerType) {
      dispatch(signInWithProvider('google'))
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Login))
