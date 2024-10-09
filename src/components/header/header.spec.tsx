import { BrowserRouter } from 'react-router-dom';
import Header from './header';
import { render } from '@testing-library/react';
describe('Header component', () => {
  test('renders header', () => {
    const { getByTestId } = render(<Header />, { wrapper: BrowserRouter });
    expect(getByTestId('test-header')).toBeInTheDocument();
  });

  test('renders logo and link', () => {
    const { getByTestId } = render(<Header />, {
      wrapper: BrowserRouter
    });

    const logoElement = getByTestId('test-header-logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement.getAttribute('href')).toBe('/');
  });
});
