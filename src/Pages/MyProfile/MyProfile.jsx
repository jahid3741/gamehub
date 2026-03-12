import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const MyProfile = () => {

  useTitle("My Profile");

  const { user } = useContext(AuthContext);

  return (

    <div className="min-h-screen flex justify-center items-center bg-slate-900 text-white">

      <div className="card w-full max-w-md bg-slate-800 shadow-xl">

        <div className="card-body text-center">

          <img
            src={user?.photoURL}
            alt="profile"
            className="w-24 h-24 rounded-full mx-auto"
          />

          <h2 className="text-2xl font-bold mt-3">
            {user?.displayName}
          </h2>

          <p className="text-gray-400">
            {user?.email}
          </p>

          <Link
            to="/update-profile"
            className="btn btn-primary mt-4"
          >
            Update Information
          </Link>

        </div>

      </div>

    </div>

  );

};

export default MyProfile;