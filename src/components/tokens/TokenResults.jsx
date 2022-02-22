import { useEffect, useState } from "react";
import Spinner from "../layout/Spinner";
import TokenItem from "./TokenItem";

function TokenResults() {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTokens = async () => {
    setLoading(true);

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
    setTokens(data.nfts);
    console.log(tokens);
    setLoading(false);
  };

  useEffect(() => {
    //fetchTokens();
  }, []);

  const tok = {
    cached_file_url:
      "https://i.insider.com/6123e07e4932030018457fb7?width=1136&format=jpeg",
    description: "piekny tokenik",
  };
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        <TokenItem token={tok} />
        <TokenItem token={tok} />
        <TokenItem token={tok} />
        <TokenItem token={tok} />
        <TokenItem token={tok} />
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default TokenResults;
