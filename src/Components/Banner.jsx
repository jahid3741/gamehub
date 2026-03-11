import { useEffect, useState } from "react";

const Banner = () => {

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/games.json")
      .then(res => res.json())
      .then(data => setGames(data));
  }, []);

  return (
    <div className="carousel w-full h-[420px] rounded-xl mt-10">

      {games.map((game, index) => (

        <div
          key={game.id}
          id={`slide${index}`}
          className="carousel-item relative w-full"
        >

          {/* Image */}
          <img
            src={game.coverPhoto}
            className="w-full object-cover"
            alt={game.title}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 flex items-center">

            <div className="text-white ml-12 max-w-xl">

              <h2 className="text-4xl font-bold mb-3">
                {game.title}
              </h2>

              <p className="mb-4">
                {game.description.slice(0,120)}...
              </p>

              <a
                href={game.downloadLink}
                target="_blank"
                className="btn btn-primary"
              >
                Install Game
              </a>

            </div>

          </div>

          {/* Slider Buttons */}
          <div className="absolute flex justify-between left-5 right-5 top-1/2">

            <a
              href={`#slide${(index - 1 + games.length) % games.length}`}
              className="btn btn-circle"
            >
              ❮
            </a>

            <a
              href={`#slide${(index + 1) % games.length}`}
              className="btn btn-circle"
            >
              ❯
            </a>

          </div>

        </div>

      ))}

    </div>
  );
};

export default Banner;