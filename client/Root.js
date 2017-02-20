import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom'
import Routes from 'routes'

const Root = ({ store }) => (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
  
export default Root
