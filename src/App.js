import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './containers/PrivateRoute';

import NotificationContainer from './containers/NotificationContainer';
import LoginContainer from './containers/LoginContainer';
import MainContainer from './containers/MainContainer';

const App = () => (
  <React.Fragment>
    <NotificationContainer />
    <div className="app">
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <PrivateRoute component={MainContainer} />
        <Redirect to="/" />
      </Switch>
    </div>
  </React.Fragment>
);

export default App;
