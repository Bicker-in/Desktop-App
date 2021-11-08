import React from 'react';
import { render, screen, queryByText, queryByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import '../../__mocks__/matchMediaMock';
import { PageComponent } from '../../__mocks__/indComponents';
import Login from '../../src/routes/login';
import App from '../../src/App';

test('loads into login page', () => {
  render(<PageComponent path="/" element={<Login />} />);

  expect(screen.getByText('Bicker'));
  expect(screen.getByText('Login >>'));
  expect(screen.getByText('or signup...'));
});

test('hover over login button', () => {
  render(<PageComponent path="/" element={<Login />} />);

  userEvent.hover(screen.getByText('Login >>'));
});

test('type in email/password input bars', () => {
  render(<PageComponent path="/" element={<Login />} />);

  const emailContent = 'cine@gmail.com';
  const passwordContent = '123password';

  // Type into email input.
  userEvent.type(screen.getByTestId('emailInput'), emailContent);

  // Check if email input has been type in.
  expect(screen.getByTestId('emailInput')).toHaveValue(emailContent);

  // Type into password input.
  userEvent.type(screen.getByTestId('passwordInput'), passwordContent);

  // Check if password input has been type in.
  expect(screen.getByTestId('passwordInput')).toHaveValue(passwordContent);
});

test('click on login button', async () => {
  render(<PageComponent path="/" element={<Login />} />);

  const button = screen.getByText('Login >>');

  // Before User clicks login button, loader should not be present.
  expect(queryByTestId(document.body, 'loadingSpinner')).not.toBeInTheDocument();

  // User clicks login button.
  userEvent.click(button);

  // Login >> text on button should disappear.
  expect(queryByText(document.body, 'Login >>')).not.toBeInTheDocument();

  // Loading spinner should appear.
  screen.getByTestId('loadingSpinner');
});

test('click on "Sign Up" link', () => {
  render(<App />);

  // Check if on Login Page
  screen.getByText('Login >>');

  // Click sign up link
  userEvent.click(screen.getByText('or signup...'));

  // Check if on Sign Up Page
  screen.getByText('User Sign Up');
});
