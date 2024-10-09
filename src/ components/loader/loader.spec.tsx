import { render } from '@testing-library/react';
import Loader from './loader';

describe('Loader component', () => {
  test('renders the loader icon', () => {
    const { container } = render(<Loader />);

    const loaderIcon = container.querySelector('svg');
    expect(loaderIcon).toBeInTheDocument();
    expect(loaderIcon).toHaveClass('lucide-loader-circle');
  });

  test('has spinning animation', () => {
    const { container } = render(<Loader />);

    const loaderIcon = container.querySelector('svg');
    expect(loaderIcon).toHaveClass('animate-spin');
  });
});
