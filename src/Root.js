import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import routes from './routes'
import { App, WelcomeNote, Header, RoundImage } from './components'

const Root = ({ store, history }) => (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  )

export default Root

if (process.env.NODE_ENV !== 'production') {
  require('./components/RoundImage')
  require('./components/App')
  require('./components/WelcomeNote')
}
