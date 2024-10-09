import { render } from '@testing-library/react';
import { Card } from './card';
describe('Card component', () => {
  test('card renders', () => {
    const { getByTestId } = render(<Card />);
    expect(getByTestId('test-card')).toBeInTheDocument();
  });
});
