import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    setError("");

    // Password validation

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      alert("Password must contain an uppercase letter");
      return;
    }

    if (!/[a-z]/.test(password)) {
      alert("Password must contain a lowercase letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // Update profile
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        });

        toast.success("Account registered successfully");;

        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
         toast.error("This email already exists");;
        } else {
          toast.error(error.message);
        }
      });
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Google login successful");

        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-900 via-black to-slate-900">
      <div className="card w-full max-w-md bg-slate-900 border border-gray-700 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-green-400">
            Register
          </h2>

          <form onSubmit={handleRegister}>
            {/* Name */}
            <form className="max-w-md mx-auto">
              {/* Name */}
              <div className="form-control mb-3 flex flex-col">
                <label htmlFor="name" className="label block mb-1">
                  <span className="label-text text-white">Name</span>
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered bg-slate-800 text-white w-full"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-control mb-3 flex flex-col">
                <label htmlFor="email" className="label block mb-1">
                  <span className="label-text text-white">Email</span>
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered bg-slate-800 text-white w-full"
                  required
                />
              </div>

              {/* Photo URL */}
              <div className="form-control mb-3 flex flex-col">
                <label htmlFor="photo" className="label block mb-1">
                  <span className="label-text text-white">Photo URL</span>
                </label>

                <input
                  id="photo"
                  type="text"
                  name="photo"
                  placeholder="Enter photo URL"
                  className="input input-bordered bg-slate-800 text-white w-full"
                  required
                />
              </div>

              {/* Password */}
              <div className="form-control mb-3 flex flex-col">
                <label htmlFor="password" className="label block mb-1">
                  <span className="label-text text-white">Password</span>
                </label>

                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="input input-bordered bg-slate-800 text-white w-full"
                  required
                />
              </div>
            </form>

            {error && <p className="text-red-500 mb-3">{error}</p>}

            <button className="btn bg-green-500 hover:bg-green-400 border-none text-black w-full">
              Register
            </button>
          </form>

          <div className="divider text-gray-400">OR</div>

          {/* Google Login */}

          <button
            onClick={handleGoogle}
            className="btn bg-white text-black w-full"
          >
            <FcGoogle size={22} />
            Register with Google
          </button>

          <p className="text-center mt-4 text-gray-400">
            Already have an account?
            <Link
              to="/auth/login"
              className="text-green-400 ml-2 font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
