import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../index';

describe('Testing Footer Component', () => {
  test('render footer component', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('footer')).toBeInTheDocument();
  });
});
