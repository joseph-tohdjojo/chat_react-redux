import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './reducer.root'





let middleWares = [
  thunkMiddleware,
]

if(NODE_ENV === 'development') {
  const logger = require('redux-logger')
  // middleWares = [ ...middleWares, logger.default]
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middleWares)
)

export default store
