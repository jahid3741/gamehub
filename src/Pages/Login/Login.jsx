import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Login successfully done");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Google login successful");
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-900 via-black to-slate-900">
      <div className="card w-full max-w-md bg-slate-900 border border-gray-700 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-green-400">
            Login
          </h2>

          <form onSubmit={handleLogin}>
            {/* Email */}

            <div className="form-control mb-2 flex flex-col">
              <label className="label mb-1">
                <span className="label-text text-white">Email</span>
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered bg-slate-800 text-white w-full"
                required
              />
            </div>

            {/* Password */}

            <div className="form-control mb-2 flex flex-col relative">
              <label className="label mb-1">
                <span className="label-text text-white">Password</span>
              </label>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered bg-slate-800 text-white w-full pr-10"
                required
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] cursor-pointer text-xl"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Forgot Password */}

            <Link
              to="/auth/forgot-password"
              state={{ email }}
              className="text-blue-400 text-sm cursor-pointer"
            >
              Forgot Password?
            </Link>

            {/* Login Button */}

            <button
              type="submit"
              className="btn bg-green-500 hover:bg-green-400 border-none text-black w-full mt-4"
            >
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
            <Link
              to="/auth/register"
              className="text-green-400 ml-2 font-semibold"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
