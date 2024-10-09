import api from '@/core/api';
import { Credit, MovieDetails } from '@/core/types/movie.types';

export const searchMovies = async (query: string = '') => {
  const res = await api.get('search/movie', { params: { query: query } });
  return res.data;
};

export const getTrendingMovies = async () => {
  const res = await api.get('trending/movie/day');
  return res.data;
};

export const getPopularMovies = async () => {
  const res = await api.get('movie/popular');
  return res.data;
};

export const getMovieDetails = async (id: string): Promise<MovieDetails> => {
  const res = await api.get(`movie/${id}`);
  return res.data;
};

export const getMovieCredits = async (id: string): Promise<Credit> => {
  const res = await api.get(`movie/${id}/credits`);
  return res.data;
};
