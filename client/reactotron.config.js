if (process.env.NODE_ENV !== 'production') {
  const Reactotron = require('reactotron-react-js').default
  const { trackGlobalErrors } = require('reactotron-react-js')
  const { reactotronRedux } = require('reactotron-redux')
  const apisaucePlugin = require('reactotron-apisauce')
  const sagaPlugin = require('reactotron-redux-saga')

  Reactotron
    .configure()
    .use(apisaucePlugin())
    .use(reactotronRedux())
    .use(sagaPlugin())
    .use(trackGlobalErrors())
    .connect()

    console.tron = Reactotron
}
