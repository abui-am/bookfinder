import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import { TextField } from '../Fields';

describe('TextField', () => {
  it('should render properly', () => {
    render(<TextField />);
  });

  it('should call onChange when typing something', () => {
    const mockOnChange = jest.fn();
    render(<TextField aria-label="test" onChange={(e) => mockOnChange(e.target.value)} />);

    const el = screen.getByLabelText('test');
    user.type(el, 'random');
    expect(mockOnChange).toBeCalled();
    expect(mockOnChange).toBeCalledTimes(6);

    expect(mockOnChange).toHaveBeenNthCalledWith(1, 'r');
    expect(mockOnChange).toHaveBeenNthCalledWith(2, 'ra');
    expect(mockOnChange).toHaveBeenNthCalledWith(3, 'ran');
  });

  it('should call onKeyPress when typing something', () => {
    const mockOnChange = jest.fn();
    render(<TextField aria-label="test" onKeyDown={(e) => mockOnChange(e.key)} />);

    const el = screen.getByLabelText('test');
    user.type(el, '{enter}');
    expect(mockOnChange).toBeCalledWith('Enter');
  });

  it('should render Icon when given', () => {
    const el = <div>Testing</div>;
    render(<TextField Icon={el} />);
    const el2 = screen.getByText('Testing');
    expect(el2).toBeVisible();
    expect(el2).toHaveAttribute('class', 'text-gray-600');
  });

  it('should render EndIcon when given', () => {
    const endIcon = <div>Testingssssssssssssss</div>;
    render(<TextField EndIcon={endIcon} />);
    const el2 = screen.getByText('Testingssssssssssssss');
    expect(el2).toBeVisible();
    expect(el2).toMatchSnapshot();
  });

  it('should render snapshop', () => {
    render(
      <div aria-label="testing">
        <TextField />
      </div>
    );
    const test = screen.getByLabelText('testing');
    expect(test).toMatchSnapshot();
  });
});
