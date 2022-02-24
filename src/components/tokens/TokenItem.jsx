import { Link } from "react-router-dom";
function TokenItem({ token: { cached_file_url, name, token_id } }) {
  return (
    <div className="">
      <div className="flex-row items-center">
        <div>
          <div className="avatar">
            <img src={cached_file_url} alt="Token"></img>
          </div>
        </div>
      </div>
      <div>
        <h2>{name}</h2>
        <Link className="" to={`/tokens/${token_id}`}>
          See details
        </Link>
      </div>
    </div>
  );
}

export default TokenItem;
