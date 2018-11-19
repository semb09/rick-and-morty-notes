import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';

const App = () => (
  <Switch>
    <Route exact to="/" component={LoginContainer} />
    <Redirect to="/" />
  </Switch>
);

export default App;
