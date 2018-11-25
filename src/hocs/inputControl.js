import React from 'react';
import shortId from 'shortid';
import { FormContext } from './formControl';

const inputControl = WrappedComponent => (
  class extends React.Component {
    static contextType = FormContext;

    static displayName = `InputControl(${WrappedComponent.name})`;

    id = shortId.generate();

    componentDidMount() {
      const { register } = this.context;
      register(this.id, this.props);
    }

    componentDidUpdate(prevProps) {
      const { setProps } = this.context;
      const { value } = this.props;
      if (value !== prevProps.value) {
        setProps(this.id, this.props);
      }
    }

    componentWillUnmount() {
      const { unregister } = this.context;
      unregister(this.id, this.props);
    }

    handleChange = (e) => {
      e.persist();
      const { handleChange } = this.context;
      const { onChange } = this.props;

      handleChange(this.id, e.target.value);
      if (onChange) onChange(e);
    }

    handleBlur = (e) => {
      e.persist();
      const { handleBlur } = this.context;
      const { onBlur } = this.props;

      handleBlur(this.id);
      if (onBlur) onBlur(e);
    }

    render() {
      const { getProps } = this.context;
      const props = getProps(this.id);

      if (!props) return null;

      return (
        <WrappedComponent
          {...props}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
        />
      );
    }
  }
);

export default inputControl;
