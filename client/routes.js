import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from 'containers/App'
import RoundImage from 'components/RoundImage'
import WelcomeNote from 'components/WelcomeNote'
import Header from 'components/Header'

const Routes = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/welcome' component={WelcomeNote} />
          <Route exact path='/image' component={RoundImage} />
          <Route component={App} />
        </Switch>
      </div>
    </BrowserRouter>
);

export default Routes
