import { Link, NavLink, useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {

    logOut()
      .then(() => {

        toast.success("Logout done successfully");
        navigate("/");

      })
      .catch((error) => {
        toast.error(error.message);
      });

  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/games">Games</NavLink>
      </li>

      <li>
        <NavLink to="/top-games">Top Games</NavLink>
      </li>

      <li>
        <NavLink to="/my-profile">My Profile</NavLink>
      </li>
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

        {user ? (
          <>
            <Link to="/my-profile">

              <img
                src={
                  user?.photoURL
                    ? user.photoURL
                    : "https://i.ibb.co/4pDNDk1/avatar.png"
                }
                alt="profile"
                className="w-10 h-10 rounded-full object-cover border"
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
            <Link to="/auth/login" className="btn btn-outline">
              Login
            </Link>

            <Link to="/auth/register" className="btn btn-primary">
              Register
            </Link>
          </>
        )}

      </div>

    </div>
  );
};

export default Navbar;