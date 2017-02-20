import asyncComponent from 'components/AsyncComponent';

const AsyncDashboard = asyncComponent(() =>
  import('./RoundImage').then(module => module.default)
);

export default AsyncDashboard;
