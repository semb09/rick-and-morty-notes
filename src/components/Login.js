import React from 'react';
import PropTypes from 'prop-types';

import { required, email } from '../validations';

import Form from './Form';
import Input from './Input';
import { ValidatedButton } from './Button';

const Login = ({ submitHandler, loading }) => (
  <div className="login-wrapper">
    <div className="login">
      <div className="login__header">
        Rick And Morty
        <span className="login__header__sub-title">
          Notes
        </span>
      </div>
      <Form submitHandler={submitHandler}>
        <Input
          name="email"
          label="Email Address"
          type="email"
          validations={[required, email]}
        />
        <Input
          name="password"
          label="Password"
          type="password"
          validations={[required]}
        />
        <ValidatedButton
          className="login__form__submit__btn"
          loading={loading}
          wrapperClass="login__form__submit"
          type="submit"
        >
          Get Schwifty
        </ValidatedButton>
      </Form>
    </div>
  </div>
);

Login.defaultProps = {
  loading: false,
};

Login.propTypes = {
  loading: PropTypes.bool,
  submitHandler: PropTypes.func.isRequired,
};

export default Login;
