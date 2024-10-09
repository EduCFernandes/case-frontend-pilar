import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MovieCard from './movie-card';
import { Movie } from '@/core/types/movie.types';
import moment from 'moment';

describe('MovieCard component', () => {
  const mockMovie: Movie = {
    adult: false,
    backdrop_path: '/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg',
    genre_ids: [28, 35, 878],
    id: 533535,
    original_language: 'en',
    original_title: 'Deadpool & Wolverine',
    overview: 'A listless Wade Wilson toils away in civilian life...',
    popularity: 4025.483,
    poster_path: '/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
    release_date: '2024-07-24',
    title: 'Deadpool & Wolverine',
    video: false,
    vote_average: 7.736,
    vote_count: 4133
  };

  test('renders movie card with provided movie', () => {
    const { getByAltText, getByText } = render(
      <MovieCard movie={mockMovie} />,
      { wrapper: BrowserRouter }
    );

    expect(
      getByAltText(`${mockMovie.original_title} poster`)
    ).toBeInTheDocument();
    expect(getByText(mockMovie.original_title)).toBeInTheDocument();
    expect(
      getByText(moment(mockMovie.release_date).format('MM/DD/YYYY'))
    ).toBeInTheDocument();
  });

  test('renders no movie message when movie is not provided', () => {
    const { getByTestId } = render(<MovieCard movie={undefined} />, {
      wrapper: BrowserRouter
    });

    expect(getByTestId('test-no-movie-message')).toBeInTheDocument();
    expect(getByTestId('test-no-movie-message')).toHaveTextContent(
      'No movie provided!'
    );
  });
});
