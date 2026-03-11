import { Link } from "react-router";

const GameCard = ({ game }) => {

  const {
    id,
    title,
    coverPhoto,
    category,
    ratings,
    developer
  } = game;

  return (

    <div className="card bg-base-100 shadow-xl">

      <figure>
        <img
          src={coverPhoto}
          alt={title}
          className="h-56 w-full object-cover"
        />
      </figure>

      <div className="card-body">

        <h2 className="card-title">
          {title}
        </h2>

        <p>
          Category: {category}
        </p>

        <p>
          Developer: {developer}
        </p>

        <p>
          ⭐ Rating: {ratings}
        </p>

        <div className="card-actions justify-end">

          <Link
            to={`/game/${id}`}
            className="btn btn-primary"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>

  );
};

export default GameCard;