import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as Faker from 'faker';
import userEvent from '@testing-library/user-event';
import '../../../__mocks__/matchMediaMock';
import { PageComponent } from '../../../__mocks__/indComponents';
import SignUp from '../../../src/routes/signup';

test('click email input and leave input', async () => {
  render(<PageComponent path="/" element={<SignUp />} />);

  // Focus on email input bar.
  screen.getByTestId('emailInput').focus();

  // Blur on email input bar.
  screen.getByTestId('usernameInput').focus();

  // Should show 'Required' error message.
  await waitFor(() => expect(screen.getByText('Required')));
});

test('type in email input with non-email address', async () => {
  render(<PageComponent path="/" element={<SignUp />} />);

  const randomInput = Faker.internet.password();

  // Focus on email input bar.
  screen.getByTestId('emailInput').focus();

  // Type on email bar with non-email text.
  userEvent.type(screen.getByTestId('emailInput'), randomInput);

  // Blur on email input bar.
  screen.getByTestId('usernameInput').focus();

  // Should show a error message that the text in the email bar is not a valid email.
  await waitFor(() => expect(screen.getByText('email must be a valid email')));
});

test('type in email input with an email address that is too long', async () => {
  render(<PageComponent path="/" element={<SignUp />} />);

  const randomInput = 'sadasdasd@gmail.comewqqweeqwewqqewweqeqwqweqewqweqweewqeqw';

  // Focus on email input bar.
  screen.getByTestId('emailInput').focus();

  // Type on email bar with an email that is more than 50 chars.
  userEvent.type(screen.getByTestId('emailInput'), randomInput);

  // Blur on email input bar.
  screen.getByTestId('usernameInput').focus();

  // Should show a error message that the text in the email bar is too long.
  await waitFor(() => expect(screen.getByText('Must be 50 characters or less')));
});
