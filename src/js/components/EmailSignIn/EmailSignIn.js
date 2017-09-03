import React, { Component } from 'react'
import { auth } from '../../utils/firebase'





export default class EmailSignIn extends Component {
  constructor() {
    super()
    this.state = {
      emailValue: '',
      passwordValue: '',
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmailChange(ev) {
    this.setState({
      emailValue: ev.target.value,
    })
  }

  handlePasswordChange(ev) {
    this.setState({
      passwordValue: ev.target.value,
    })
  }

  handleSubmit(ev) {
    ev.preventDefault()

    auth().signInWithEmailAndPassword(this.state.emailValue, this.state.passwordValue)
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log('something went wrong')
        console.log(err)
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className=""
          type="email"
          placeholder="Email"
          onChange={ this.handleEmailChange }
          value={ this.state.emailValue }
        />
        <input
          className=""
          type="password"
          placeholder="Password"
          onChange={ this.handlePasswordChange }
          value={ this.state.passwordValue }
        />
        <input
          className=""
          type="submit"
        />
      </form>
    )
  }
}
