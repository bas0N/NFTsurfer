import { useEffect, useState } from "react";

function TokenResults() {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTokens = async () => {
    const response = await fetch(
      "https://api.nftport.xyz/v0/nfts?chain=ethereum&include=metadata",
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
    setTokens(data);
    setLoading(true);
  };

  useEffect(() => {
    //fetchTokens();
  }, []);
  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {tokens.map((token) => (
        <h3>Ba$$on</h3>
      ))}
      <h3>Ba$$on</h3>
      <h3>Ba$$on</h3>
      <h3>Ba$$on</h3>
      <h3>Ba$$on</h3>
      <h3>Ba$$on</h3>
      <h3>Ba$$on</h3>
      <h3>Ba$$on</h3>
    </div>
  );
}

export default TokenResults;
