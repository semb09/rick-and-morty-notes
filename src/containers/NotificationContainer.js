import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { dismissNotification } from '../actions';

import Notification from '../components/Notification';

class NotificationContainer extends React.Component {
  dismissNotification = (id) => {
    const { actions } = this.props;
    actions.dismissNotification(id);
  }

  render() {
    const { notifications } = this.props;

    return (
      <div className="notifications-wrapper">
        <TransitionGroup>
          {Object.keys(notifications)
            .map(id => (
              <CSSTransition
                key={id}
                timeout={300}
                classNames="zoom"
              >
                <Notification
                  id={id}
                  text={notifications[id].text}
                  error={notifications[id].error}
                  closeHandler={() => this.dismissNotification(id)}
                />
              </CSSTransition>
            ))
          }
        </TransitionGroup>
      </div>
    );
  }
}

NotificationContainer.propTypes = {
  router: PropTypes.shape({
    location: PropTypes.object,
  }).isRequired,
  actions: PropTypes.objectOf(
    PropTypes.func,
  ).isRequired,
  notifications: PropTypes.objectOf(
    PropTypes.object,
  ).isRequired,
};

const mapStateToProps = state => ({
  notifications: state.global.notifications,
  router: state.router,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    dismissNotification,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);
