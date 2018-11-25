import shortId from 'shortid';
import * as auth from '../services/auth';

export const loginSuccess = token => ({
  type: 'LOGIN_SUCCESS',
  token,
});

export const login = credentials => (
  (dispatch) => {
    dispatch({
      type: 'LOGIN_REQUEST',
    });
    return auth.login(credentials)
      .then((res) => {
        auth.setToken(res.token);
        dispatch(loginSuccess(res.token));
      })
      .catch((err) => {
        dispatch({
          type: 'LOGIN_FAIL',
        });
        dispatch({
          type: 'DISPATCH_NOTIFICATION',
          id: shortId.generate(),
          text: err.message,
          error: true,
        });
      });
  }
);

export const logout = () => (
  (dispatch) => {
    auth.deleteToken();
    dispatch({
      type: 'LOGOUT',
    });
  }
);
