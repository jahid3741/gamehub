import { useEffect, useState } from "react";
import useTitle from "../../Hooks/useTitle";


const TopGames = () => {
  useTitle("Top Games");

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        // Sort by rating and take top 6
        const sorted = [...data]
          .sort((a, b) => b.ratings - a.ratings)
          .slice(0, 6);

        setGames(sorted);
      });
  }, []);

  return (
    <div className="min-h-screen w-11/12 mx-auto py-10 text-white">
      <h1 className="text-4xl font-bold text-center mb-10 text-green-400">
        Top Rated Games
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {games.map((game) => (
          <div
            key={game.id}
            className="card bg-slate-900 border border-gray-700 shadow-xl"
          >
            <figure>
              <img
                src={game.coverPhoto}
                alt={game.title}
                className="h-56 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-green-400">{game.title}</h2>

              <p className="text-gray-400">
                Category: {game.category}
              </p>

              <p className="text-gray-400">
                Developer: {game.developer}
              </p>

              <p className="text-yellow-400 font-semibold">
                ⭐ Rating: {game.ratings}
              </p>

              <div className="card-actions justify-end">
                <a
                  href={game.downloadLink}
                  target="_blank"
                  className="btn bg-green-500 hover:bg-green-400 border-none text-black"
                >
                  Install Game
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopGames;