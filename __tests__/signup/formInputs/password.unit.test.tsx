import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { PageComponent } from '../../../__mocks__/indComponents';
import SignUp from '../../../src/routes/signup';

test('click password input and leave input', async () => {
  render(<PageComponent path="/" element={<SignUp />} />);

  // Focus on password input bar.
  screen.getByTestId('usernameInput').focus();

  // Blur on password input bar.
  screen.getByTestId('emailInput').focus();

  // Should show 'Required' error message.
  await waitFor(() => expect(screen.getByText('Required')));
});

test('type in password input with an password that is too short', async () => {
  render(<PageComponent path="/" element={<SignUp />} />);

  const tooShortPassword = 'das';

  // Focus on password input bar.
  screen.getByTestId('passwordInput').focus();

  // Type on password bar with an email that is less than 5 chars.
  userEvent.type(screen.getByTestId('passwordInput'), tooShortPassword);

  // Blur on password input bar.
  screen.getByTestId('emailInput').focus();

  // Should show a error message that the text in the password bar is too short.
  await waitFor(() => expect(screen.getByText('Must be longer than 5 characters')));
});

test('type in password input with a password that is too long', async () => {
  render(<PageComponent path="/" element={<SignUp />} />);

  const randomPassword =
    'dasdasd sad das das ads ads das dsa dsa dsa ads das sad asd sad dsa das  ads da das';

  // Focus on password input bar.
  screen.getByTestId('passwordInput').focus();

  // Type on password bar with an email that is more than 50 chars.
  userEvent.type(screen.getByTestId('passwordInput'), randomPassword);

  // Blur on password input bar.
  screen.getByTestId('emailInput').focus();

  // Should show a error message that the text in the password bar is too long.
  await waitFor(() => expect(screen.getByText('Must be 50 characters or less')));
});
