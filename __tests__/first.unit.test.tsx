import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

test('loads and displays greeting', async () => {
  render(<App />);

  // fireEvent.click(screen.getByText('Load Greeting'));

  // await waitFor(() => screen.getByRole('heading'));

  // expect(screen.getByRole('heading')).toHaveTextContent('hello there');
  // expect(screen.getByRole('button')).toBeDisabled();

  expect(screen.getByText('Welcome to React Parcel Micro App!'));
});
