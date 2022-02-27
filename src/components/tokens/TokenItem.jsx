import { Link } from "react-router-dom";
function TokenItem({
  token: { cached_file_url, name, token_id, description, contract_address },
}) {
  return (
    <div className="max-w-xs col-span-1 flex flex-col  overflow-auto rounded-md shadow-md dark:bg-coolGray-900 dark:text-coolGray-100">
      <img
        src={cached_file_url}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-coolGray-500 "
      />
      <div className="flex flex-col justify-around p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-wide line-clamp-2">
            {name}
          </h2>
          <p className="dark:text-coolGray-100 line-clamp-2">{description}</p>
        </div>
        <Link className="" to={`/token/${contract_address}/${token_id}`}>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 dark:text-coolGray-900"
          >
            Check
          </button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default TokenItem;
