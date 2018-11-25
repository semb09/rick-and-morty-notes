import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './auth';
import global from './global';
import characters from './characters';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  auth,
  global,
  characters,
});

const createRootReducer = history => (state, action) => {
  let newState = state;
  if (action.type === 'LOGOUT') {
    newState = undefined;
  }
  return rootReducer(history)(newState, action);
};

export default createRootReducer;
