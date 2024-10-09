import ButtonGroup, {
  ButtonData
} from '@/components/button-group/button-group';
import { Card } from '@/components/card/card';
import Loader from '@/components/loader/loader';
import MovieCard from '@/components/movie-card/movie-card';
import MovieSearch from '@/components/movie-search/movie-search';
import { Movie } from '@/core/types/movie.types';
import {
  getTrendingMovies,
  getPopularMovies
} from '@/services/movies/movies.service';
import { MoviesQueries } from '@/services/movies/movies.types';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') || 'trending';
  const [filterButtons] = useState<ButtonData[]>([
    { value: 'trending', label: 'Trending' },
    { value: 'popular', label: 'Popular' }
  ]);

  const handleFilterChange = (newFilter: string) => {
    setSearchParams({ filter: newFilter });
  };

  useEffect(() => {
    setSearchParams({ filter: 'trending' });
  }, []);

  const {
    data: movies,
    isLoading,
    isFetching,
    isRefetching,
    error
  } = useQuery({
    queryKey: [MoviesQueries.LIST, filter],
    queryFn: () => {
      return filter === 'popular' ? getPopularMovies() : getTrendingMovies();
    }
  });

  return (
    <div className="container mx-auto flex flex-col gap-4 py-4">
      <MovieSearch />
      <ButtonGroup
        buttonsData={filterButtons}
        onButtonClick={handleFilterChange}
        selectedValue={filter}
      />

      {error ? (
        <>
          <Card className="flex items-center justify-center p-4 h-20 text-red-500">
            <span className="font-semibold text-lg">
              Error fetching movies: {error.message}
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
                <h1 className="w-fit mx-auto text-xl p-5">No movies found!</h1>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
