import { createContext, useState } from "react";

const TokenContext = createContext();

//const TOKEN_URL =
const TOKEN_TOKEN = process.env.REACT_APP_API_KEY;

export const TokenProvider = ({ children }) => {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchTokens = async () => {
    setLoading(true);

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
    setTokens(data.search_results);
    console.log(tokens);
    setLoading(false);
  };
  return (
    <TokenContext.Provider value={{ tokens, loading, fetchTokens }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenContext;
