import React, { Component, PropTypes } from 'react'
import App from './App'

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object
  }

  render () {
    const { store } = this.props
    return (
      <App />
    )
  }
}
