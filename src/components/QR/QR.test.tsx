import React from 'react';
import { act, render, waitFor } from '@testing-library/react';
import QR from './index';
import userEvent from '@testing-library/user-event';

Object.defineProperty(window, 'location', {
  get() {
    return { href: 'mockUrl' };
  },
});

describe('QR Component', () => {
  it('renders successfully', () => {
    const { getByRole } = render(<QR />);

    expect(
      getByRole('button', { name: /Generate Profile QR Code/i })
    ).toBeTruthy();
  });

  it('renders qr code', async () => {
    const { getByRole, getByAltText } = render(<QR />);

    const generateButton = getByRole('button', {
      name: /Generate Profile QR Code/i,
    });

    act(() => {
      userEvent.click(generateButton);
    });

    await waitFor(() => {
      expect(getByRole('button', { name: /Hide Profile QR/i })).toBeTruthy();
      expect(getByAltText(/qrImage/i)).toBeTruthy();
    });
  });

  it('able to hide qr code', async () => {
    const { getByRole } = render(<QR />);

    const generateButton = getByRole('button', {
      name: /Generate Profile QR Code/i,
    });

    act(() => {
      userEvent.click(generateButton);
    });

    await waitFor(() => {
      expect(getByRole('button', { name: /Hide Profile QR/i })).toBeTruthy();
    });

    const hideButton = getByRole('button', { name: /Hide Profile QR/i });

    act(() => {
      userEvent.click(hideButton);
    });

    expect(
      getByRole('button', { name: /Generate Profile QR Code/i })
    ).toBeTruthy();
  });
});
