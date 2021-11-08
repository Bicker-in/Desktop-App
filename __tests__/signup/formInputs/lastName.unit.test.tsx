import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { PageComponent } from '../../../__mocks__/indComponents';
import SignUp from '../../../src/routes/signup';

test('click lastName input and leave input', async () => {
  render(<PageComponent path="/" element={<SignUp />} />);

  // Focus on firstName input bar.
  screen.getByTestId('lastNameInput').focus();

  // Blur on firstName input bar.
  screen.getByTestId('usernameInput').focus();

  // Should show 'Required' error message.
  await waitFor(() => expect(screen.getByText('Required')));
});

test('type in lastName input with a last name that is too long', async () => {
  render(<PageComponent path="/" element={<SignUp />} />);

  const tooLongLastName =
    'das dsa ads sad asd sad dsa das das asd ads. sad ads dsa sda sad das sad ads asd asd asd asd asd asd sad asd ads ads ads';

  // Focus on firstName input bar.
  screen.getByTestId('lastNameInput').focus();

  // Type a too long firstName text on the first name input bar.
  userEvent.type(screen.getByTestId('lastNameInput'), tooLongLastName);

  // Blur on firstName input bar.
  screen.getByTestId('usernameInput').focus();

  // Should show 'Required' error message.
  await waitFor(() => expect(screen.getByText('Must be 50 characters or less')));
});
