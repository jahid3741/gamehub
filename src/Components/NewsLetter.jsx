import { useState } from "react";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    // get existing subscribers
    const subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];

    // check if email already exists
    if (subscribers.includes(email)) {
      toast.error("Email already subscribed. Use another email.");

      return;
    }

    // add new email
    subscribers.push(email);

    localStorage.setItem("subscribers", JSON.stringify(subscribers));

    toast.success("Subscribed successfully!");

    setEmail("");
  };

  return (
    <div className="bg-slate-900 py-12 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>

      <p className="mb-6 text-gray-400">
        Get updates about new games and releases
      </p>

      <form onSubmit={handleSubscribe} className="flex justify-center gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-72 bg-slate-800"
          required
        />

        <button className="btn btn-primary">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
