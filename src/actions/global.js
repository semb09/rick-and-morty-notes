import shortId from 'shortid';

export const dispatchNotification = (text, error = false) => ({
  type: 'DISPATCH_NOTIFICATION',
  id: shortId.generate(),
  text,
  error,
});

export const dismissNotification = id => (
  (dispatch, state) => {
    const { [id]: _, ...rest } = state().global.notifications;
    dispatch({
      type: 'DISMISS_NOTIFICATION',
      notifications: rest,
    });
  }
);

export const clearAllNotifications = () => ({
  type: 'CLEAR_ALL_NOTIFICATIONS',
});
