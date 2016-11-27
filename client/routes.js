import referenciallyEqualRootRoute from 'referenciallyEqualRootRoute'
import MainLayout from 'components/MainLayout'

export default Object.assign(referenciallyEqualRootRoute, {
  path: '/',
  component: MainLayout,
  childRoutes: [
      {
        getIndexRoute (location, cb) {
          require.ensure([], require => cb(null, { component: require('containers/App').default }))
      },
      getChildRoutes (location, cb) {
        require.ensure([], require => {
          cb(null, [
            {
              path: 'image',
              component: require('components/RoundImage').default
            },
            {
              path: 'welcome',
              component: require('components/WelcomeNote').default
            }
          ])
        })
      }
    }
  ]
})
