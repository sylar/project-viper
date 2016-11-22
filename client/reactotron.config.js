if (process.env.NODE_ENV !== 'production') {
  const Reactotron = require('reactotron-react-js').default
  const { trackGlobalErrors } = require('reactotron-react-js')
  const { reactotronRedux } = require('reactotron-redux')
  const apisaucePlugin = require('reactotron-apisauce')

  Reactotron
    .configure()
    .use(trackGlobalErrors())
    .use(reactotronRedux())
    .use(apisaucePlugin())
    .connect()

    console.tron = Reactotron
}
