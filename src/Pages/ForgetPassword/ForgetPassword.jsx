import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { toast } from "react-toastify";
import useTitle from "../../Hooks/useTitle";

const auth = getAuth(app);

const ForgotPassword = () => {
  useTitle("Forgot Password");

  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState(location.state?.email || "");

  const handleReset = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);

      toast.success("Password reset email sent");

      // redirect to gmail
      window.location.href = "https://mail.google.com";
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-900 via-black to-slate-900">
      <div className="card w-full max-w-md bg-slate-900 border border-gray-700 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-green-400">
            Reset Password
          </h2>

          <form onSubmit={handleReset} className="space-y-4">
            <div className="form-control flex flex-col">
              <label className="label mb-1">
                <span className="label-text text-white">Email</span>
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered bg-slate-800 text-white w-full"
                required
              />
            </div>

            <button
              type="submit"
              className="btn bg-green-500 hover:bg-green-400 border-none text-black w-full"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
