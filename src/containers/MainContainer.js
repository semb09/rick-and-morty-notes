import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../actions';

import Header from '../components/Header';
import OverviewContainer from './OverviewContainer';
import SingleContainer from './SingleContainer';

class MainContainer extends React.Component {
  handleLogout = () => {
    const { actions } = this.props;
    actions.logout();
  }

  render() {
    return (
      <React.Fragment>
        <Header logoutHandler={this.handleLogout} />
        <main className="main-content">
          <Switch>
            <Route exact path="/single/:id" component={SingleContainer} />
            <Route exact path="/overview" component={OverviewContainer} />
            <Redirect to="/overview" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

MainContainer.propTypes = {
  actions: PropTypes.objectOf(
    PropTypes.func,
  ).isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    logout,
  }, dispatch),
});

export default connect(null, mapDispatchToProps)(MainContainer);
