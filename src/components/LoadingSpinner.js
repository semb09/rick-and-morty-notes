import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import screamingSun from '../assets/images/screaming-sun.png';

const LoadingSpinner = ({ showSpinner }) => (
  <TransitionGroup>
    {showSpinner
      && (
        <CSSTransition
          classNames="fade"
          timeout={800}
        >
          <div className="loading-spinner-wrapper">
            <img className="loading-spinner" src={screamingSun} alt="loading" />
          </div>
        </CSSTransition>
      )
    }
  </TransitionGroup>
);

LoadingSpinner.defaultProps = {
  showSpinner: false,
};

LoadingSpinner.propTypes = {
  showSpinner: PropTypes.bool,
};

export default LoadingSpinner;
