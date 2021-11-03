import React from 'react';
import { render } from '@testing-library/react';
import Footer from './index';

describe('Footer Component', () => {
  it('renders successfully', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/Developed and Open-sourced by Eric Mong/i)).toBeTruthy();
  });
});
