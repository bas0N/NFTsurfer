import { Link } from "react-router-dom";
function TokenItem({
  token: { cached_file_url, name, token_id, description },
}) {
  return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-coolGray-900 dark:text-coolGray-100">
      <img
        src={cached_file_url}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-coolGray-500 "
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
          <p className="dark:text-coolGray-100 truncate">{description}</p>
        </div>
        <Link className="" to={`/tokens/${token_id}`}>
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
