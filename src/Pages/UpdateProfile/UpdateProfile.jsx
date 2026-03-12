import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const UpdateProfile = () => {

  useTitle("Update Profile");

  const { user } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const navigate = useNavigate();

  const handleUpdate = async (e) => {

    e.preventDefault();

    try {

      await updateProfile(user, {
        displayName: name,
        photoURL: photo
      });

      toast.success("Profile updated successfully");

      navigate("/my-profile");

    } catch (error) {

      toast.error(error.message);

    }

  };

  return (

    <div className="min-h-screen flex justify-center items-center bg-slate-900">

      <div className="card w-full max-w-md bg-slate-800 shadow-xl">

        <div className="card-body">

          <h2 className="text-2xl font-bold text-center text-white">
            Update Profile
          </h2>

          <form onSubmit={handleUpdate} className="space-y-4">

            {/* Name */}

            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Name"
              className="input input-bordered w-full"
              required
            />

            {/* Photo URL */}

            <input
              type="text"
              value={photo}
              onChange={(e)=>setPhoto(e.target.value)}
              placeholder="Photo URL"
              className="input input-bordered w-full"
              required
            />

            <button className="btn btn-primary w-full">
              Update Information
            </button>

          </form>

        </div>

      </div>

    </div>

  );

};

export default UpdateProfile;