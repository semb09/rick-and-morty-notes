import validator from 'validator';

export const required = (value) => {
  if (!value.toString().trim().length) {
    return 'This field is required.';
  }
  return '';
};

export const email = (value) => {
  if (!validator.isEmail(value)) {
    return 'Please enter a valid email address.';
  }
  return '';
};
