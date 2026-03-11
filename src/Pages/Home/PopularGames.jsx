import { useEffect, useState } from "react";
import GameCard from "../../components/GameCard";
import { motion } from "framer-motion";

const PopularGames = () => {
  const [allGames, setAllGames] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        // keep a sorted copy so we can slice without mutating original data
        const sorted = [...data].sort((a, b) => b.ratings - a.ratings);
        setAllGames(sorted);
      })
      .catch((err) => {
        // optional: handle fetch errors
        console.error("Failed to load games.json:", err);
      });
  }, []);

  const displayedGames = showAll ? allGames : allGames.slice(0, 3);

  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center mb-10">Popular Games</h2>

      {/* Use motion layout to animate grid reflow when showing all / less */}
      <motion.div className="grid md:grid-cols-3 gap-6" layout>
        {displayedGames.map((game) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            layout
          >
            <GameCard game={game} />
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default PopularGames;
