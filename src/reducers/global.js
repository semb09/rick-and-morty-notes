const initialState = {
  notifications: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'DISPATCH_NOTIFICATION':
      return {
        ...state,
        notifications: {
          ...state.notifications,
          [action.id]: {
            text: action.text,
            error: action.error || false,
          },
        },
      };
    case 'DISMISS_NOTIFICATION':
      return {
        ...state,
        notifications: action.notifications,
      };
    case 'CLEAR_ALL_NOTIFICATIONS':
      return {
        ...state,
        notifications: {},
      };
    default:
      return state;
  }
};
