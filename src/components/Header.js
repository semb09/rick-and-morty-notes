import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import { ReactComponent as BackIcon } from '../assets/icons/back.svg';
import { ReactComponent as LogoutIcon } from '../assets/icons/logout.svg';

const Header = ({ logoutHandler }) => (
  <header className="header">
    <div className="header__inner">
      <Route
        path="/single"
        render={() => (
          <Link to="/" className="header__inner__back-btn">
            <BackIcon className="header__inner__back-btn__icon" />
          </Link>
        )}
      />
      <Link className="header__inner__link" to="/">
        Rick
        <span className="header__inner__link__small-text">
          and
        </span>
        Morty Notes
      </Link>
      <button
        type="button"
        className="header__inner__logout-btn"
        onClick={logoutHandler}
      >
        <LogoutIcon className="header__inner__logout-btn__icon" />
      </button>
    </div>
  </header>
);

Header.propTypes = {
  logoutHandler: PropTypes.func.isRequired,
};

export default Header;
