import { useEffect, useState } from "react";
import GameCard from "../../components/GameCard";

const PopularGames = () => {

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/games.json")
      .then(res => res.json())
      .then(data => {

        // sort by ratings
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

        {
          games.map(game => (
            <GameCard
              key={game.id}
              game={game}
            />
          ))
        }

      </div>

    </div>
  );
};

export default PopularGames;