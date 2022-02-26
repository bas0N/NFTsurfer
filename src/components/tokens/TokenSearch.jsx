import { useState, useContext } from "react";
import TokenContext from "../../context/tokens/TokensContext";
function TokenSearch() {
  const { tokens, searchTokens } = useContext(TokenContext);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      window.alert("No input provided.");
    } else {
      searchTokens(text);
      setText("");
    }
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2  md:grid-cols-2 mb-8 gap-8 my-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full input pr-40 lg input-lg text-black bg-gray-400 border-black"
                placeholder="Search NFTs"
                value={text}
                onChange={handleChange}
              ></input>
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none btn btn-lg w-36"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      {tokens.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg">Clear</button>
        </div>
      )}
    </div>
  );
}

export default TokenSearch;
