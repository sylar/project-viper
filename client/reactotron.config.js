if (process.env.NODE_ENV !== 'production') {
  const Reactotron = require('reactotron-react-js').default
  const { trackGlobalErrors } = require('reactotron-react-js')
  const { reactotronRedux } = require('reactotron-redux')

  Reactotron
    .configure()
    .use(trackGlobalErrors())
    .use(reactotronRedux())
    .connect()

    console.tron = Reactotron
}
