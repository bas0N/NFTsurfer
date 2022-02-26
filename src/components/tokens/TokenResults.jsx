import { useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import TokenItem from "./TokenItem";
import TokensContext from "../../context/tokens/TokensContext";

function TokenResults() {
  const { tokens, loading, fetchTokens } = useContext(TokensContext);

  const tok = {
    cached_file_url:
      "https://i.insider.com/6123e07e4932030018457fb7?width=1136&format=jpeg",
    name: "piekny tokenik",
    token_id:
      "23373184580116416654517041278983836539081195153671486441125492020977007067137",
  };
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {tokens.map((token) => (
          <TokenItem token={token} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default TokenResults;
// <TokenItem token={tok} />
