import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state || "/";

  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");

    signInUser(email, password)
      .then(() => {
        navigate(from);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        navigate(from);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-900 via-black to-slate-900">
      <div className="card w-full max-w-md bg-slate-900 shadow-xl border border-gray-700">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-green-400">
            Login
          </h2>

          <form onSubmit={handleLogin}>
            {/* Email */}
             <form className="max-w-md mx-auto">
      {/* Email */}
      <div className="form-control mb-4 flex flex-col">
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

      {/* Password */}
      <div className="form-control mb-4 flex flex-col">
        <label htmlFor="password" className="label block mb-1">
          <span className="label-text text-white">Password</span>
        </label>

        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          className="input input-bordered bg-slate-800 text-white w-full"
          required
        />
      </div>
    </form>

            {error && <p className="text-red-500 mb-3">{error}</p>}

            <button className="btn bg-green-500 hover:bg-green-400 border-none text-black w-full">
              Login
            </button>
          </form>

          <div className="divider text-gray-400">OR</div>

          {/* Google Login */}

          <button
            onClick={handleGoogleLogin}
            className="btn bg-white text-black w-full"
          >
            <FcGoogle size={22} />
            Continue with Google
          </button>

          <p className="text-center mt-4 text-gray-400">
            Don't have an account?
            <Link to="/auth/register" className="text-green-400 ml-2 font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
