import React, { Component } from 'react'
import { auth } from '../../utils/firebase'

import GoogleSvg from '../../../../public/images/svg/google.svg'

const provider = new auth.GoogleAuthProvider()

export default class GoogleSignIn extends Component {
  componentDidMount() {
    auth()
    .onAuthStateChanged(user => {
      if(user) {

      } else {
        
      }
    })
  }

  onSignInClick(ev) {
    auth()
    .signInWithPopup(provider)
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
      <div>
        <button
          className=""
          type="button"
          onClick={ this.onSignInClick }
        >
          <GoogleSvg />
          Sign in / Sign up
        </button>
      </div>
    )
  }
}
