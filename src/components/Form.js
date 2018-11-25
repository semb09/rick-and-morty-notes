import React from 'react';

import formControl from '../hocs/formControl';

const Form = ({
  getValues, submitHandler, children,
  validate, ...props
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    submitHandler(getValues());
  };

  return (
    <form
      {...props}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};

export default formControl(Form);
