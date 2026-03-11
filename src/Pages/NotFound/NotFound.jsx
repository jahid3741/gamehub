import { Link } from "react-router";
import useTitle from "../../Hooks/useTitle";

const NotFound = () => {
  useTitle("404 Not Found");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white">
      <h1 className="text-8xl font-bold text-red-500 mb-4">404</h1>

      <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>

      <p className="text-gray-400 mb-6 text-center">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="btn bg-green-500 hover:bg-green-400 border-none text-black"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
