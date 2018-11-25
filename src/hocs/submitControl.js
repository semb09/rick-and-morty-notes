import React from 'react';
import { FormContext } from './formControl';

const submitControl = WrappedComponent => (
  class extends React.PureComponent {
    static contextType = FormContext;

    static displayName = `SubmitControl(${WrappedComponent.name})`;

    render() {
      const { errors } = this.context;

      return (
        <WrappedComponent
          hasErrors={errors().length > 0}
          {...this.props}
        />
      );
    }
  }
);

export default submitControl;
