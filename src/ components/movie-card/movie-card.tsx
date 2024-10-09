import { Movie } from '@/core/types/movie.types';
import { Card } from '../card/card';
import { cn } from '@/helpers/cn';
import { convertRatingToPercentage, getBorderColor } from '@/helpers/rating';
import { Link } from 'react-router-dom';
import MovieRating from '../movie-rating/movie-rating';

interface MovieCardProps {
  movie?: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  if (!movie)
    return (
      <Card
        className="bg-slate-50 flex items-center justify-center"
        data-testid="test-no-movie-message"
      >
        <span className="text-sm">No movie provided!</span>
      </Card>
    );

  return (
    <div className="flex flex-col gap-1" key={movie.id}>
      <Link to={`movie/${movie.id}`}>
        <Card className="relative">
          <MovieRating
            rating={movie.vote_average}
            className="-bottom-5 left-3 absolute"
          />
          <img
            className="rounded-lg w-full min-h-[calc(150px*1.5)] object-cover"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`${movie.original_title} poster`}
          />
        </Card>
      </Link>
      <Link to={`movie/${movie.id}`} className="mt-4">
        <h3 className="hover:text-blue-600">{movie.original_title}</h3>
        <span className="text-gray-400 text-xs">{movie.release_date}</span>
      </Link>
    </div>
  );
}

export default MovieCard;
