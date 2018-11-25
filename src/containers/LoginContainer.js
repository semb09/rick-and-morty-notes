import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions';

import Login from '../components/Login';

class LoginContainer extends React.Component {
  handleSubmit = (credentials) => {
    const { actions } = this.props;
    actions.login(credentials);
  }

  render() {
    const { token, loading } = this.props;

    if (token) {
      return <Redirect exact to="/overview" />;
    }

    return (
      <Login
        submitHandler={this.handleSubmit}
        loading={loading}
      />
    );
  }
}

LoginContainer.defaultProps = {
  token: null,
  loading: false,
};

LoginContainer.propTypes = {
  token: PropTypes.string,
  loading: PropTypes.bool,
  actions: PropTypes.objectOf(
    PropTypes.func,
  ).isRequired,
};

const mapStateToProps = state => ({
  token: state.auth.token,
  loading: state.auth.loading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    login,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
