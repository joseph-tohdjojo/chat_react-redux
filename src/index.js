import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './js/include.assets'

import GoogleSignIn from './js/components/GoogleSignIn/GoogleSignIn'
import EmailSignIn from './js/components/EmailSignIn/EmailSignIn'





class App extends Component {

  render() {
    return (
      <div>
        <GoogleSignIn />
        <EmailSignIn />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
