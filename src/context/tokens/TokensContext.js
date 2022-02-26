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
  const clearTokens = () => {
    dispatch({
      type: "CLEAR_TOKENS",
    });
  };
  const searchTokens = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(
      `https://api.nftport.xyz/v0/search?text=${text}&chain=all&page_size=10&order_by=relevance`,
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

    const { search_results } = await response.json();
    console.log(search_results);
    dispatch({
      type: "GET_TOKENS",
      payload: search_results,
    });
  };
  return (
    <TokenContext.Provider
      value={{
        tokens: state.tokens,
        loading: state.loading,
        searchTokens,
        clearTokens,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export default TokenContext;
