import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import global from './global';

export default history => combineReducers({
  router: connectRouter(history),
  global,
});
