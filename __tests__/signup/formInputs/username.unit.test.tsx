import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { PageComponent } from '../../../__mocks__/indComponents';
import SignUp from '../../../src/routes/signup';

test('click username input and leave input', async () => {
  render(<PageComponent path="/" element={<SignUp />} />);

  // Focus on username input bar.
  screen.getByTestId('usernameInput').focus();

  // Blur on username input bar.
  screen.getByTestId('emailInput').focus();

  // Should show 'Required' error message.
  await waitFor(() => expect(screen.getByText('Required')));
});

test('type in username input with an username that is too long', async () => {
  render(<PageComponent path="/" element={<SignUp />} />);

  const randomInput = 'sadasdasd7bgbgmail8bffxscomewqqweeqwewqqewweqeqwqweqewqweqweewqeqw';

  // Focus on username input bar.
  screen.getByTestId('usernameInput').focus();

  // Type on username bar with an username that is more than 50 chars.
  userEvent.type(screen.getByTestId('usernameInput'), randomInput);

  // Blur on username input bar.
  screen.getByTestId('emailInput').focus();

  // Should show a error message that the text in the username bar is too long.
  await waitFor(() => expect(screen.getByText('Must be 25 characters or less')));
});
