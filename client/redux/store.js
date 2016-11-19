import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
  const createLogger = require('redux-logger')
  const logger = createLogger({
    predicate: (a, b) => true,
    collapsed: (a, b) => true
  })
  middlewares.push(logger)
}

const createTheStore =
  process.env.NODE_ENV === 'development'
  ? console.tron.createStore
  : createStore

export default () => {
  const store = createTheStore(
    rootReducer,
    compose(applyMiddleware(...middlewares))
  )

  return store
}
