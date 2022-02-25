const tokensReducer = (state, action) => {
  switch (action.type) {
    case "GET_TOKENS":
      return {
        ...state,
        tokens: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default tokensReducer;
