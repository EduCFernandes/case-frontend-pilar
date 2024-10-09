import api from '@/core/api';

export const getMovies = async () => {
  const res = await api.get('discover/movie');
  return res.data;
};

export const getTrendingMovies = async () => {
  const res = await api.get('trending/movie/day');
  return res.data;
};

export const getMovieDetails = async (id: string) => {
  const res = await api.get(`movie/${id}`);
  return res.data;
};
