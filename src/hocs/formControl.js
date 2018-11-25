import React from 'react';

export const FormContext = React.createContext({ isValid: 'woo' });

const formControl = WrappedComponent => (
  class extends React.PureComponent {
    static displayName = `FormControl(${WrappedComponent.name})`;

    state = {
      byId: {},
      byName: {},
    };

    register = (id, props) => {
      this.setState(state => ({
        byId: {
          ...state.byId,
          [id]: {
            ...props,
            value: props.value || '',
          },
        },
        byName: {
          ...state.byName,
          [props.name]: [...(state.byName[props.name] || []), id],
        },
      }), () => this.validation(id));
    }

    unregister = (id, props) => {
      this.setState((state) => {
        const { byId } = state;
        const { [id]: _, ...rest } = byId;

        return ({
          byId: rest,
          byName: {
            ...state.byName,
            [props.name]: state.byName[props.name]
              .filter(key => key !== id),
          },
        });
      });
    }

    setProps = (id, props) => {
      this.setState(state => ({
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            ...props,
          },
        },
      }), () => this.validation(id));
    };

    getProps = (id) => {
      const { byId } = this.state;
      const { [id]: props } = byId;
      return props || null;
    };

    handleChange = (id, value) => {
      this.setState(state => ({
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            value,
            isChanged: true,
            isUsed: false,
          },
        },
      }), () => this.validation(id));
    }

    handleBlur = (id) => {
      this.setState(state => ({
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            isUsed: true,
          },
        },
      }));
    }

    validation = (id) => {
      const { byId, byName } = this.state;
      const { [id]: props } = byId;
      const { validations, value } = props;

      const components = () => {
        const comp = {};
        Object.keys(byName)
          .forEach((name) => {
            comp[name] = byName[name].map(a => byId[a]);
          });
        return comp;
      };

      if (!validations) return;

      const updateProps = (error) => {
        this.setState(
          state => ({
            byId: {
              ...state.byId,
              [id]: {
                ...state.byId[id],
                error,
              },
            },
          }),
        );
      };

      for (let i = 0; i < validations.length; i += 1) {
        const error = validations[i](value, props, components());
        updateProps(error);
        if (error) break;
      }
    }

    validate = (name) => {
      const { byName } = this.state;
      this.setState(state => ({
        byId: {
          ...state.byId,
          ...state.byName[name]
            .reduce((_, id) => {
              const newState = {};
              newState[id] = {
                ...state.byId[id],
                isChanged: true,
                isUsed: true,
              };
              return newState;
            }, {}),
        },
      }), () => byName[name].forEach(id => this.validation(id)));
    }

    getValues = () => {
      const { byName, byId } = this.state;
      const values = {};

      const keys = Object.keys(byName);

      for (let i = 0; i < keys.length; i += 1) {
        if (byName[keys[i]].length > 1) {
          values[keys[i]] = byName[keys[i]].map(key => byId[key].value);
        } else {
          const { value } = byId[byName[keys[i]][0]];
          values[keys[i]] = value;
        }
      }

      return values;
    }

    errors = () => {
      const { byId } = this.state;

      return Object.keys(byId).filter(id => byId[id].error);
    }

    render() {
      const { ...props } = this.props;

      return (
        <FormContext.Provider
          value={{
            register: this.register,
            unregister: this.unregister,
            getProps: this.getProps,
            setProps: this.setProps,
            handleChange: this.handleChange,
            handleBlur: this.handleBlur,
            errors: this.errors,
          }}
        >
          <WrappedComponent
            getValues={this.getValues}
            validate={this.validate}
            {...props}
          />
        </FormContext.Provider>
      );
    }
  }
);

export default formControl;
