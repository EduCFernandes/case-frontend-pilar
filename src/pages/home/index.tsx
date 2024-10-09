import Loader from '@/ components/loader/loader';
import MovieCard from '@/ components/movie-card/movie-card';
import { Movie } from '@/core/types/movie.types';
import { getTrendingMovies } from '@/services/movies/movies.service';
import { MoviesQueries } from '@/services/movies/movies.types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const Home = () => {
  const {
    data: movies,
    isLoading,
    isFetching,
    isRefetching
  } = useQuery({
    queryKey: [MoviesQueries.LIST],
    queryFn: () => {
      return getTrendingMovies()
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
    <div className="container mx-auto">
      {isLoading || isFetching || (isRefetching && <Loader />)}
      {movies?.results?.length ? (
        <>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
            {movies.results.map((movie: Movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Home;
