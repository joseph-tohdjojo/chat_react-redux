import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { startEmailSignup } from '../../redux/action.creators'

// components
import Input from '../Input/Input'





class Login extends Component {
  constructor() {
    super()

    this.onSubmit = this.onSubmit.bind(this)
    this.redirectToChatroom = this.redirectToChatroom.bind(this)
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
    console.log('calling redirect');
    this.props.history.push('/chatroom')
  }

  onSubmit(ev) {
    ev.preventDefault()
    const { email, password, createEmailAccount } = this.props
    createEmailAccount({ email, password })
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

          <form
            onSubmit={ this.onSubmit }
          >
            <label className='t-legal'>
              Email
            </label>
            <Input
              className=""
              type="email"
              placeholder="Email"
            />
            <label className='t-legal'>
              Password
            </label>
            <Input
              className=""
              type="password"
              placeholder="Password"
            />


            <input
              className=""
              type="submit"
              placeholder="Password"
            />
          </form>

          <hr/>

          <button
            className='t-subhead'
            type="button"
            // onClick={}
          >
            Signup with Google
          </button>

          <button
            className='t-subhead'
            type="button"
            // onClick={}
          >
            Signup with Facebook
          </button>

        </div>
      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    email: state.credentials.email,
    password: state.credentials.password,
    errorMessage: state.signin.errorMessage,
    loggedIn: state.signin.loggedIn,
    sendingCredentials: state.signin.sendingCredentials,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createEmailAccount: (credentials) => {
      dispatch(startEmailSignup(credentials))
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Login))
