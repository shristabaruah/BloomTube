const authReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_CHECK":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "SIGNUP":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

export { authReducer };
