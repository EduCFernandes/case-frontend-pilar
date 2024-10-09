import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import MovieRating from './movie-rating';

describe('MovieRating Component', () => {
  test('renders movie rating', () => {
    const { getByTestId } = render(<MovieRating rating={7.5} />);
    expect(getByTestId('test-movie-rating')).toBeInTheDocument();
  });

  test('displays the correct percentage', () => {
    const { getByTestId } = render(<MovieRating rating={7.5} />);
    expect(getByTestId('test-movie-rating')).toHaveTextContent('75%');
  });

  test('applies the correct red border color', () => {
    const { getByTestId } = render(<MovieRating rating={1.5} />);

    const movieRatingElement = getByTestId('test-movie-rating');
    expect(movieRatingElement).toHaveClass('border-red-500');
  });

  test('applies the correct orange border color', () => {
    const { getByTestId } = render(<MovieRating rating={4} />);

    const movieRatingElement = getByTestId('test-movie-rating');
    expect(movieRatingElement).toHaveClass('border-orange-500');
  });

  test('applies the correct yellow border color', () => {
    const { getByTestId } = render(<MovieRating rating={6} />);

    const movieRatingElement = getByTestId('test-movie-rating');
    expect(movieRatingElement).toHaveClass('border-yellow-500');
  });

  test('applies the correct green border color', () => {
    const { getByTestId } = render(<MovieRating rating={7.5} />);

    const movieRatingElement = getByTestId('test-movie-rating');
    expect(movieRatingElement).toHaveClass('border-green-500');
  });
});
