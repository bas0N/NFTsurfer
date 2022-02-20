import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container py-7 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <Link
              className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              to="/"
            >
              NFTsurfer
            </Link>
          </div>
        </div>

        <div className="items-center flex">
          <div className="flex flex-row mx-6">
            <Link
              className=" text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              to="/"
            >
              Home
            </Link>
            <Link
              className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              to="/explorer"
            >
              Explorer
            </Link>
            <Link
              className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              to="/verification"
            >
              Verification
            </Link>
            <Link
              className="my-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              to="/about"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
