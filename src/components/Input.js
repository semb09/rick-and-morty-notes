import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';

import inputControl from '../hocs/inputControl';

const Input = ({
  label, name, id, isUsed, isChanged, error, validations, ...props
}) => {
  const hasError = isChanged && isUsed && error;

  return (
    <React.Fragment>
      <label className="input-label" htmlFor={name}>
        {label}
        <input
          className="input"
          id={id || name}
          name={name}
          {...props}
        />
      </label>
      <span className={`input-error-wrapper${hasError ? ' input-error-wrapper--error' : ''}`}>
        <span className="input-error">
          <TransitionGroup>
            {hasError}
          </TransitionGroup>
        </span>
      </span>
    </React.Fragment>
  );
};

export default inputControl(Input);

Input.defaultProps = {
  id: null,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
};
