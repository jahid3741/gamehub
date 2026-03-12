import { Link, useLoaderData } from "react-router";
import useTitle from "../../Hooks/useTitle";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const GameDetails = () => {
  useTitle("Game Details");

  const game = useLoaderData();

  const {
    title,
    coverPhoto,
    category,
    description,
    developer,
    ratings,
    downloadLink,
  } = game;

  return (
    <div>
      
    <div className="min-h-screen w-11/12 mx-auto py-10 text-white">
      <div className="card bg-slate-900 shadow-xl border border-gray-700">
        <figure>
          <img
            src={coverPhoto}
            alt={title}
            className="w-full h-[400px] object-cover"
          />
        </figure>

        <div className="card-body">
          <h2 className="text-3xl font-bold text-green-400">{title}</h2>

          <p className="text-gray-400">Category: {category}</p>

          <p className="text-gray-400">Developer: {developer}</p>

          <p className="text-yellow-400">⭐ Rating: {ratings}</p>

          <p className="mt-4">{description}</p>

          <div className="card-actions mt-5">
            <a href={downloadLink} target="_blank" className="btn btn-primary">
              Install Game
            </a>
          </div>
          <Link className="btn btn-secondary" to="/">Back to Home</Link>
        </div>
      </div>
    </div>

    </div>
  );
};

export default GameDetails;
