import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {

  const [games, setGames] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("/games.json")
      .then(res => res.json())
      .then(data => setGames(data));
  }, []);

  // Auto slide
  useEffect(() => {

    if (games.length === 0) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);

  }, [games, current]);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === games.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? games.length - 1 : prev - 1
    );
  };

  if (games.length === 0) return null;

  const game = games[current];

  return (
    <div className="relative w-full h-[420px] rounded-xl mt-10 overflow-hidden">

      <AnimatePresence mode="wait">

        <motion.div
          key={current}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.6 }}
          className="absolute w-full h-full"
        >

          {/* Image */}
          <img
            src={game.coverPhoto}
            className="w-full h-full object-cover"
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

        </motion.div>

      </AnimatePresence>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="btn btn-circle absolute left-5 top-1/2 -translate-y-1/2"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="btn btn-circle absolute right-5 top-1/2 -translate-y-1/2"
      >
        ❯
      </button>

    </div>
  );
};

export default Banner;