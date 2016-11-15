import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'

const logger = createLogger({
  predicate: process.env.NODE_ENV !== 'production'
})

export default () => {
  const middleware = applyMiddleware(logger)
  const store = process.env.NODE_ENV === 'production'
    ? createStore(rootReducer, middleware)
    : console.tron.createStore(rootReducer, middleware)

  return store
}
