import { useEffect, useState } from "react";
import GameCard from "../../components/GameCard";
import { motion } from "framer-motion";

const PopularGames = () => {

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/games.json")
      .then(res => res.json())
      .then(data => {

        const sortedGames = data
          .sort((a, b) => b.ratings - a.ratings)
          .slice(0, 3);

        setGames(sortedGames);

      });

  }, []);

  return (
    <div className="my-16">

      <h2 className="text-3xl font-bold text-center mb-10">
        Popular Games
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {games.map((game) => (

          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <GameCard game={game} />
          </motion.div>

        ))}

      </div>

    </div>
  );
};

export default PopularGames;