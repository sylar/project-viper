import asyncComponent from 'components/AsyncComponent';
const AsyncDashboard = asyncComponent(() =>
  import('./WelcomeNote').then(module => module.default)
);

export default AsyncDashboard;
