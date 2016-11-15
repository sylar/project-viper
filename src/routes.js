import referenciallyEqualRootRoute from './referenciallyEqualRootRoute'

export default Object.assign(referenciallyEqualRootRoute, {
  path: '/',
  childRoutes: [
    {
      getIndexRoute (location, cb) {
        require.ensure([], require => cb(null, { component: require('./components/App').default }))
      },
      getChildRoutes (location, cb) {
        require.ensure([], require => {
          cb(null, [
            {
              path: 'image',
              component: require('./components/RoundImage').default
            },
            {
              path: 'welcome',
              component: require('./components/WelcomeNote').default
            }
          ])
        })
      }
    }
  ]
})
