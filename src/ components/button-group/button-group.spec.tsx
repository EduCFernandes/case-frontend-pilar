import { render, screen, fireEvent } from '@testing-library/react';
import ButtonGroup from './button-group';

describe('ButtonGroup Component', () => {
  const buttonsData = [
    { label: 'Button 1', value: '1' },
    { label: 'Button 2', value: '2' },
    { label: 'Button 3', value: '3' }
  ];

  test('renders buttons', () => {
    render(
      <ButtonGroup
        buttonsData={buttonsData}
        selectedValue=""
        onButtonClick={() => {}}
      />
    );

    buttonsData.forEach((button) => {
      expect(screen.getByText(button.label)).toBeInTheDocument();
    });
  });

  test('calls onButtonClick when a button is clicked', () => {
    const handleClick = vi.fn();
    render(
      <ButtonGroup
        buttonsData={buttonsData}
        selectedValue=""
        onButtonClick={handleClick}
      />
    );

    fireEvent.click(screen.getByText('Button 1'));

    expect(handleClick).toHaveBeenCalledWith('1');
  });

  test('applies active class to the selected button', () => {
    render(
      <ButtonGroup
        buttonsData={buttonsData}
        selectedValue="2"
        onButtonClick={() => {}}
      />
    );

    const selectedButton = screen.getByText('Button 2');
    expect(selectedButton).toHaveClass('bg-slate-800 text-white');

    buttonsData
      .filter((button) => button.value !== '2')
      .forEach((button) => {
        expect(screen.getByText(button.label)).not.toHaveClass(
          'bg-slate-800 text-white'
        );
      });
  });
});
