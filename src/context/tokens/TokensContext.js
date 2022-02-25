import { createContext, useReducer } from "react";
import tokensReducer from "./TokensReducer";

const TokenContext = createContext();

//const TOKEN_URL =
//const TOKEN_TOKEN = process.env.REACT_APP_API_KEY;

export const TokenProvider = ({ children }) => {
  const initialState = {
    tokens: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(tokensReducer, initialState);
  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  const fetchTokens = async () => {
    setLoading();

    const response = await fetch(
      "https://api.nftport.xyz/v0/search?text=ape&chain=all&order_by=relevance",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_API_KEY,
        },
      }
    ).catch((err) => {
      console.error(err);
    });

    const data = await response.json();
    console.log(data);
    dispatch({
      type: "GET_TOKENS",
      payload: data,
    });
  };
  return (
    <TokenContext.Provider
      value={{ tokens: state.tokens, loading: state.loading, fetchTokens }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export default TokenContext;
