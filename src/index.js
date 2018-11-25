import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import * as serviceWorker from './serviceWorker';

import store, { history } from './store';

import { loginSuccess } from './actions/auth';

import App from './App';

import './styles/index.scss';

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

const token = Cookies.get('token');

if (token) {
  store.dispatch(loginSuccess(token));
}

ReactDOM.render(
  router,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
