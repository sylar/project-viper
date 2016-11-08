import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import Root from 'components/Root'

const rootEl = document.getElementById('root')
render(
  <AppContainer>
    <Root />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const RootContainer = require('./components/Root').default
    render(
      <AppContainer>
        <RootContainer />
      </AppContainer>,
      rootEl
    )
  })
}
