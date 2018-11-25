const initialState = {
  token: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        token: action.token,
        loading: false,
      };
    case 'LOGIN_FAIL':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
