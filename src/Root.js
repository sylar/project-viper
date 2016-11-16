import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import routes from './routes'

const Root = ({ store, history }) => (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  )

export default Root

if (process.env.NODE_ENV !== 'production') {
  require('./components/RoundImage')
  require('./containers/App')
  require('./components/WelcomeNote')
  require('./components/MainLayout')
}
