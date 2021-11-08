import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import '../../../__mocks__/matchMediaMock';
import { PageComponent } from '../../../__mocks__/indComponents';
import SignUp from '../../../src/routes/signup';

test('click firstName input and leave input', async () => {
  render(<PageComponent path="/" element={<SignUp />} />);

  // Focus on firstName input bar.
  screen.getByTestId('firstNameInput').focus();

  // Blur on firstName input bar.
  screen.getByTestId('usernameInput').focus();

  // Should show 'Required' error message.
  await waitFor(() => expect(screen.getByText('Required')));
});

test('type in firstName input with a first name that is too long', async () => {
  render(<PageComponent path="/" element={<SignUp />} />);

  const tooLongFirstName =
    'das dsa ads sad asd sad dsa das das asd ads. sad ads dsa sda sad das sad ads asd asd asd asd asd asd sad asd ads ads ads';

  // Focus on firstName input bar.
  screen.getByTestId('firstNameInput').focus();

  // Type a too long firstName text on the first name input bar.
  userEvent.type(screen.getByTestId('firstNameInput'), tooLongFirstName);

  // Blur on firstName input bar.
  screen.getByTestId('usernameInput').focus();

  // Should show 'Required' error message.
  await waitFor(() => expect(screen.getByText('Must be 50 characters or less')));
});
