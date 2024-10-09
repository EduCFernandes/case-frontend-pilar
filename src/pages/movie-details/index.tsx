import { getMovieDetails } from '@/services/movies/movies.service';
import { MoviesQueries } from '@/services/movies/movies.types';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const MovieDetails = () => {
  const a = useQuery({
    queryKey: [MoviesQueries.DETAILS],
    queryFn: () => {
      return getMovieDetails('889737')
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
      <div className="w-screen p-10 bg-slate-700 flex items-center justify-center text-white">
        <div>
          <img src="" alt="" />
        </div>
        <div className="flex flex-col">
          <h1>Movie name</h1>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8"></div>
    </>
  );
};

export default MovieDetails;
