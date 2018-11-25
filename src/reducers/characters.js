const initialState = {
  loading: false,
  loadingNext: false,
  loadingSingle: false,
  info: {},
  results: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CHARACTERS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_CHARACTERS_SUCCESS':
      return {
        ...state,
        ...action.data,
        results: {
          ...state.results,
          ...action.results,
        },
        loading: false,
      };
    case 'GET_CHARACTERS_FAIL':
      return {
        ...state,
        loading: false,
      };
    case 'GET_NEXT_CHARACTERS_REQUEST':
      return {
        ...state,
        loadingNext: true,
      };
    case 'GET_NEXT_CHARACTERS_SUCCESS':
      return {
        ...state,
        ...action.data,
        results: {
          ...state.results,
          ...action.results,
        },
        loadingNext: false,
      };
    case 'GET_SINGLE_CHARACTER_REQUEST':
      return {
        ...state,
        loadingSingle: true,
      };
    case 'GET_SINGLE_CHARACTER_SUCCESS':
      return {
        ...state,
        loadingSingle: false,
        results: {
          ...state.results,
          ...action.result,
        },
      };
    case 'GET_SINGLE_CHARACTER_FAIL':
      return {
        ...state,
        loadingSingle: false,
      };
    default:
      return state;
  }
};
