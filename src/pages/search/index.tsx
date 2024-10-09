import { Card } from '@/components/card/card';
import Loader from '@/components/loader/loader';
import MovieCard from '@/components/movie-card/movie-card';
import MovieSearch from '@/components/movie-search/movie-search';
import { Movie } from '@/core/types/movie.types';
import { searchMovies } from '@/services/movies/movies.service';
import { MoviesQueries } from '@/services/movies/movies.types';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') || '';

  const {
    data: movies,
    isLoading,
    isFetching,
    isRefetching,
    error
  } = useQuery({
    queryKey: [MoviesQueries.LIST, query],
    queryFn: () =>
      searchMovies(query).then((res) => {
        console.log(res);
        return res;
      })
  });

  return (
    <>
      <div className="container mx-auto flex flex-col gap-4 py-4">
        <MovieSearch />
        <h2 className="font-semibold text-2xl mb-4">Search Results</h2>
        {error ? (
          <>
            <Card className="flex items-center justify-center p-4 h-20 text-red-500">
              <span className="font-semibold text-lg">
                Error searching movies: {error.message}
              </span>
            </Card>
          </>
        ) : (
          <>
            {isLoading || isFetching || isRefetching ? (
              <Loader />
            ) : (
              <>
                {movies?.results?.length ? (
                  <>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
                      {movies.results.map((movie: Movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                      ))}
                    </div>
                  </>
                ) : (
                  <h1 className="w-fit mx-auto text-xl p-5">
                    No movies found!
                  </h1>
                )}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Search;
