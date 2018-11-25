import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

class ModalPortal extends React.Component {
  constructor(props) {
    super(props);

    this.rootSelector = document.body;
    this.container = document.createElement('div');
  }

  componentDidMount() {
    this.rootSelector.appendChild(this.container);
  }

  componentWillUnmount() {
    this.rootSelector.removeChild(this.container);
  }

  render() {
    const { showModal, children } = this.props;

    const modal = () => (
      <TransitionGroup>
        {showModal
          && (
            <CSSTransition
              timeout={300}
              classNames="fade"
            >
              {children}
            </CSSTransition>
          )
        }
      </TransitionGroup>
    );

    return ReactDOM.createPortal(modal(), this.container);
  }
}

ModalPortal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ModalPortal;
