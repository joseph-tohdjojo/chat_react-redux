import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducer.root'





let middleWares = [
  thunkMiddleware,
]

const storeArgs = [
  rootReducer,
]

if(NODE_ENV === 'development') {
  storeArgs.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

const store = createStore(
  ...storeArgs,
  applyMiddleware(...middleWares)
)

export default store
