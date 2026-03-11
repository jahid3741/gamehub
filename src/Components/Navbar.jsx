import { Link, NavLink } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(error => console.log(error));
  };

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/games">Games</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-200 shadow-md px-6">

      {/* Left */}
      <div className="navbar-start">

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link to="/" className="text-xl font-bold">
          GameHub
        </Link>

      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end gap-3">

        {
          user ? (
            <>
              <Link to="/profile">
                <img
                  src={user.photoURL}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
              </Link>

              <button
                onClick={handleLogout}
                className="btn btn-primary"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="btn btn-outline"
              >
                Login
              </Link>

              <Link
                to="/auth/register"
                className="btn btn-primary"
              >
                Register
              </Link>
            </>
          )
        }

      </div>

    </div>
  );
};

export default Navbar;