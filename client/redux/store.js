import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'rootReducer'
import rootSaga from 'sagas'
import { extend } from 'lodash'

const middlewares = []
const sagaAdditionalMiddlewares = []

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger')
  // const sagaMonitor = console.tron.createSagaMonitor()
  const logger = createLogger({
    predicate: (a, b) => true,
    collapsed: (a, b) => true
  })
  middlewares.push(logger)
  // sagaAdditionalMiddlewares.push({sagaMonitor})
}

const sagaMiddleware = createSagaMiddleware(...sagaAdditionalMiddlewares)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createTheStore =
  process.env.NODE_ENV === 'development'
  ? createStore
  : createStore

middlewares.push(sagaMiddleware)

export default () => {
  const store = createTheStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  )

  sagaMiddleware.run(rootSaga)

  return store
}
