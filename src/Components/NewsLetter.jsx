const Newsletter = () => {
  return (
    <div className="bg-base-200 py-16 text-center rounded-xl my-16">

      <h2 className="text-3xl font-bold mb-4">
        Subscribe to our Newsletter
      </h2>

      <p className="mb-6">
        Get updates about new indie games and developers.
      </p>

      <div className="flex justify-center gap-2">

        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-72"
        />

        <button className="btn btn-primary">
          Subscribe
        </button>

      </div>

    </div>
  );
};

export default Newsletter;