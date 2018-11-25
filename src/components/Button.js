import React from 'react';
import submitControl from '../hocs/submitControl';

import { ReactComponent as LoadingIcon } from '../assets/icons/loading.svg';

const Button = ({
  className, loading, hasErrors, children, wrapperClass, ...props
}) => (
  <span className={`btn-wrapper${wrapperClass ? ` ${wrapperClass}` : ''}`}>
    <button
      className={`btn${className ? ` ${className}` : ''}`}
      type="button"
      disabled={hasErrors || loading}
      {...props}
    >
      {loading
        ? <LoadingIcon className="login__form__submit__btn__loading-icon" />
        : children
      }
    </button>
  </span>
);

export const ValidatedButton = submitControl(Button);

export default Button;
