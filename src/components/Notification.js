import React from 'react';
import PropTypes from 'prop-types';

class Notification extends React.Component {
  componentDidMount() {
    const { closeHandler, id } = this.props;
    setTimeout(() => closeHandler(id), 3000);
  }

  render() {
    const { error, text } = this.props;
    return (
      <div className={`notification${error ? ' notification--error' : ''}`}>
        {text}
      </div>
    );
  }
}

Notification.propTypes = {
  id: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  closeHandler: PropTypes.func.isRequired,
};

export default Notification;
