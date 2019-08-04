const initialState = { open: false, error: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SOCKET_OPEN':
      return { ...state, open: true, error: false };
    case 'SOCKET_ERROR':
      return { ...state, error: action.code, open: false };
    case 'CLEAR':
    default:
      return state;
  }
};
