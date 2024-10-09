import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import MovieSearch from './movie-search';
describe('MovieSearch Component', () => {
  test('renders header', () => {
    const { getByTestId } = render(<MovieSearch />, { wrapper: BrowserRouter });
    expect(getByTestId('test-movie-search')).toBeInTheDocument();
  });

  test('updates input value on change', () => {
    const { getByTestId } = render(<MovieSearch />, {
      wrapper: BrowserRouter
    });

    const input = getByTestId('test-search-input') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Joker' } });
    expect(input.value).toBe('Joker');
  });

  test('initially displays the input field empty', () => {
    const { getByTestId } = render(<MovieSearch />, { wrapper: BrowserRouter });

    const input = getByTestId('test-search-input') as HTMLInputElement;
    expect(input.value).toBe('');
  });
});
