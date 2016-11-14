import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore, combineReducers } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// import * as reducers from './reducers'
import Root from './Root'

import Reactotron from 'reactotron-react-js'

Reactotron
  .configure() // we can use plugins here -- more on this later
  .connect() // let's connect!

const reducer = combineReducers({
  routing: routerReducer
})

const rootEl = document.getElementById('root')

const store = createStore(reducer)

const history = syncHistoryWithStore(browserHistory, store)

render(
  <AppContainer>
    <Root store={store} history={history}/>
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./Root', () => {
    const Container = require('./Root').default
    render(
      <AppContainer>
        <Container store={store} history={history}/>
      </AppContainer>,
      rootEl
    )
  })
}
