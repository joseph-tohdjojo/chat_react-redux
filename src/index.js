import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './js/include.assets'

// redux store
import store from './js/redux/store.js'

// components
import App from './js/components/App/App'





function RootApp() {
  return (
    <Provider store={ store }>
      <Router>
        <App/>
      </Router>
    </Provider>
  )
}

ReactDOM.render(<RootApp/>, document.getElementById('root'))
