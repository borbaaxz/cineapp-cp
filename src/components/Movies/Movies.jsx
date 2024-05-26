import { FaStar } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

function Movies({ filme }) {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img
        className="w-full h-auto rounded-t-lg"
        src={`https://image.tmdb.org/t/p/w200/${filme.poster_path}`}
        alt={filme.title || filme.name}
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold text-black">
          {filme.title || filme.name}
        </h1>
        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-500" />
          <span className="ml-2 text-black">
            {filme.vote_average}
          </span>
        </div>
        <Link
          className="inline-block mt-4 text-blue-600 hover:underline"
          to={`/filmes/${filme.id}`}
        >
          Detalhes
        </Link>
      </div>
    </div>
  );
}

export default Movies;
