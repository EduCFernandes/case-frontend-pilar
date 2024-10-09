import Loader from '@/components/loader/loader';
import {
  getMovieCredits,
  getMovieDetails
} from '@/services/movies/movies.service';
import { MoviesQueries } from '@/services/movies/movies.types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { Genre } from '@/core/types/movie.types';
import MovieRating from '@/components/movie-rating/movie-rating';
import { Card } from '@/components/card/card';
import user from '@/assets/user.svg';

const MovieDetails = () => {
  const { movieId } = useParams();

  const {
    error,
    data: movie,
    isLoading: loadingMovie,
    isFetching: fetchingMovie,
    isRefetching: refetchingMovie
  } = useQuery({
    queryKey: [MoviesQueries.DETAILS],
    queryFn: () => {
      return getMovieDetails(movieId || '')
        .then((res) => {
          console.log(res);
          return res;
        })
        .catch(({ response }: AxiosError) => {
          if (response) {
            console.error(response);
          }
        });
    }
  });

  const {
    error: castError,
    data: credits,
    isLoading: loadingCredits,
    isFetching: fetchingCredits,
    isRefetching: refetchingCredits
  } = useQuery({
    queryKey: [MoviesQueries.CREDITS],
    queryFn: () => {
      return getMovieCredits(movieId || '')
        .then((res) => {
          console.log(res);
          return res;
        })
        .catch(({ response }: AxiosError) => {
          if (response) {
            console.error(response);
          }
        });
    }
  });

  return (
    <>
      <div className="w-screen h-[70vh] p-10 bg-slate-700 flex items-start justify-center text-gray-300 gap-4">
        <div className="rounded-lg border border-slate-600 h-[450px] w-[300px] min-w-[300px] flex items-center justify-center">
          {loadingMovie || fetchingMovie || refetchingMovie ? (
            <Loader />
          ) : (
            <>
              {movie && (
                <img
                  className="rounded-lg w-full min-h-[calc(150px*1.5)] object-cover"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={`${movie.original_title} poster`}
                />
              )}
            </>
          )}
        </div>
        <div className="flex flex-col grow px-5">
          {error ? (
            <div className="flex items-center justify-center p-4 h-20 text-red-500">
              <span className="font-semibold text-lg">
                Error while fetching movie details
              </span>
            </div>
          ) : (
            <>
              {loadingMovie || fetchingMovie || refetchingMovie ? (
                <Loader />
              ) : (
                <>
                  {movie ? (
                    <>
                      <h1 className="text-2xl font-semibold text-white">
                        {movie.original_title}
                        <span className="text-gray-300">
                          {' '}
                          ({moment(movie.release_date).format('YYYY')})
                        </span>
                      </h1>
                      <div className="flex gap-2 mb-4">
                        <span>
                          {moment(movie.release_date).format('MM/DD/YYYY')} (
                          {movie.origin_country})
                        </span>
                        -
                        <span>
                          {movie.genres
                            .map((genre: Genre) => genre.name)
                            .join(', ')}
                        </span>
                        -
                        <span>
                          {moment
                            .utc(
                              moment
                                .duration(movie.runtime, 'minutes')
                                .asMilliseconds()
                            )
                            .format('H[h] m[m]')}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <MovieRating rating={movie.vote_average} />
                        <span>User Score</span>
                      </div>
                      <p className="italic text-teal-400 mb-4 mt-4">
                        {movie.tagline}
                      </p>
                      <h3 className="text-xl text-white">Overview</h3>
                      <p className="text-base">{movie.overview}</p>
                      <div className="grid gap-4 grid-cols-3 mt-4">
                        {credits?.crew.slice(0, 7).map((crew) => (
                          <div className="flex flex-col">
                            <span className="font-semibold">{crew.name}</span>
                            <span>{crew.job}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : null}
                </>
              )}
            </>
          )}
        </div>
      </div>
      <div className="container py-4">
        <h2 className="font-semibold text-2xl mb-4">Cast</h2>
        {castError ? (
          <div className="flex items-center justify-center p-4 h-20 text-red-500">
            <span className="font-semibold text-lg">
              Error while fetching movie cast list
            </span>
          </div>
        ) : (
          <>
            {loadingCredits || fetchingCredits || refetchingCredits ? (
              <Loader />
            ) : (
              <div className="overflow-x-auto flex gap-4">
                {credits?.cast.map((cast) => (
                  <Card key={cast.id} className="min-w-[200px] w-[200px]">
                    <div className="h-[300px] bg-gray-100">
                      <img
                        className="rounded-t h-[300px]"
                        src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                        alt={`${cast.name} photo`}
                        onError={(e) => {
                          e.currentTarget.src = user;
                        }}
                      />
                    </div>

                    <div className="p-1">
                      <p className="font-semibold">{cast.name}</p>
                      <p>{cast.character}</p>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default MovieDetails;
