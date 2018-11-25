import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const { token } = rest;
      const { location } = props;

      if (!token) {
        return <Redirect to="/" from={location.pathname} />;
      }

      return <Component {...props} />;
    }}
  />
);

const mapStateToProps = state => ({
  token: state.auth.token,
});

export default connect(mapStateToProps)(PrivateRoute);
