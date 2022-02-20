import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="mx-auto flex flex-col my-3">
      <div className="underline font-black text-6xl">#404</div>
      <div className="text-2xl font-light text-center my-6">Page not found</div>
      <Link
        to="/"
        className="inline-block px-12 py-3 text-sm font-medium text-teal-700 text-center border border-teal-700 rounded hover:bg-teal-700 hover:text-white active:bg-teal-700 focus:outline-none focus:ring"
      >
        Home
      </Link>
    </div>
  );
}

export default NotFound;
