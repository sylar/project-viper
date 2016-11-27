import 'reactotron.config.js'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from 'Root'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import createStore from 'redux/store'

const store = createStore()
const history = syncHistoryWithStore(browserHistory, store)

const rootEl = document.getElementById('root')
const renderApp = () => render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  rootEl
)

if (process.env.NODE_ENV == 'development' && module.hot) {
  module.hot.accept(['Root', 'redux/rootReducer'], () => {
    console.log('this is 🔥');
    store.replaceReducer(require('redux/rootReducer').default);
    renderApp()
  })
}

renderApp()
