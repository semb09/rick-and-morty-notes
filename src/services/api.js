import axios from 'axios';
import store from '../store';
import { dispatchNotification } from '../actions';

export const get = (url, params = null) => (
  axios({
    url,
    method: 'get',
    params,
    responseType: 'json',
  })
    .then(response => response)
    .catch((error) => {
      store.dispatch(dispatchNotification(
        'Something went wrong',
        true,
      ));
      return Promise.reject(error);
    })
);
