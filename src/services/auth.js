import Cookies from 'js-cookie';

export const login = credentials => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.email.toLowerCase() === 'email@address.com'
        && credentials.password === 'password'
      ) return resolve({ token: 'abc1' });
      return reject(
        new Error('Email and password do not match.'),
      );
    }, 1000);
  })
);

export const setToken = (token) => {
  Cookies.set('token', token, { expires: 1 });
};

export const deleteToken = () => {
  Cookies.remove('token');
};
