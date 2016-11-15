import './reactotron.config.js'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './Root'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import createStore from './redux/store'

const store = createStore()
const history = syncHistoryWithStore(browserHistory, store)

const rootEl = document.getElementById('root')
const renderApp = () => render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  rootEl
)
renderApp()

if (module.hot) {
  module.hot.accept('./Root', renderApp)
  module.hot.accept('./redux/rootReducer', () => {
      store.replaceReducer(rootReducer);
  });
}
