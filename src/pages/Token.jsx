import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import TokenDetails from "../components/layout/TokenDetails";
import TransactionTable from "../components/layout/TransactionTable";

import TokenContext from "../context/tokens/TokensContext";
function Token() {
  const { findToken, token, loading, getTransactions, statistics } =
    useContext(TokenContext);
  const { nft, contract } = token;

  const params = useParams();
  useEffect(() => {
    findToken(params.contract, params.id);
    getTransactions(params.contract);
  }, []);
  //place for spinner
  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="w-full mx-auto">
        <div className="mb-4">
          <Link
            to="/"
            className="inline-block px-12 py-3 text-sm font-medium text-teal-700 text-center border border-teal-700 rounded hover:bg-teal-700 hover:text-white active:bg-teal-700 focus:outline-none focus:ring"
          >
            Go Back
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mt-16 mb-8 md:gap-8 display-inline ">
          <div className=" flex border-solid  rounded-2xl justify-start			 ">
            {nft !== undefined ? (
              <img
                src={nft.cached_file_url}
                alt="Image"
                className="rounded-lg h-72 object-contain"
              ></img>
            ) : (
              <></>
            )}
          </div>
          <div className="col-span-2 h-72 bg-gray-400 rounded-2xl">
            <TransactionTable />
          </div>
        </div>
        <div className="bg-gray-400 rounded-2xl	">
          <TokenDetails statistics={statistics} />
        </div>
      </div>
    </>
  );
}

export default Token;
