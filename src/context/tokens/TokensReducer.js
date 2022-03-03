const tokensReducer = (state, action) => {
  switch (action.type) {
    case "GET_TOKENS":
      return {
        ...state,
        tokens: action.payload,
        loading: false,
      };
    case "GET_TOKEN":
      return {
        ...state,
        token: action.payload,
        loading: false,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_TOKENS":
      return {
        ...state,
        tokens: [],
      };
    case "GET_STATISTICS":
      return {
        ...state,
        statistics: action.payload,
      };

    default:
      return state;
  }
};

export default tokensReducer;
