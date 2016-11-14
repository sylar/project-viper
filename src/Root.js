import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithState, routerReducer } from 'react-router-redux'

// import * as reducers from './reducers'
import { App, RoundImage, WelcomeNote } from './components'

export default class Root extends Component {
  render () {
    return (
      <Provider store={this.props.store}>
        <div>
          <Router history={this.props.history}>
            <Route path='/'>
              <IndexRoute component={App} />
              <Route path='image' component={RoundImage} />
              <Route path='welcome' component={WelcomeNote} />
            </Route>
          </Router>
        </div>
      </Provider>
    )
  }
}
