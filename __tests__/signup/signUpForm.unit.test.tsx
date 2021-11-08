import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { PageComponent } from '../../__mocks__/indComponents';
import SignUp from '../../src/routes/signup';
import App from '../../src/App';

test('loads into SignUp page', () => {
  render(<PageComponent path="/" element={<SignUp />}/>);

  expect(screen.getByText('User Sign Up'));
});

test('click back button on SignUp page', () => {
  render(<App />);

  // Check to see if you're on the Login page.
  expect(screen.getByText('Login >>'));

  // Click on "or signup.." to go to Sign Up page.
  userEvent.click(screen.getByText('or signup...'));

  // Check to see if you're on the Sign Up page.
  expect(screen.getByText('User Sign Up'));

  // Click on "Back Button" (<-) to go back to Login page.
  userEvent.click(screen.getByTestId('Back Button'));

  // Check to see if you're back on the Login page.
  expect(screen.getByText('Login >>'));
});
