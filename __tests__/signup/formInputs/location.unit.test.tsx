import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import '../../../__mocks__/matchMediaMock';
import { PageComponent } from '../../../__mocks__/indComponents';
import SignUp from '../../../src/routes/signup';

test('type in location input with a location name that is too long', async () => {
  render(<PageComponent path="/" element={<SignUp />} />);

  const tooLongLocation =
    'das dsa ads sad asd sad dsa das das asd ads. sad ads dsa sda sad das sad ads asd asd asd asd asd asd sad asd ads ads ads';

  // Focus on firstName input bar.
  screen.getByTestId('locationInput').focus();

  // Type a too long firstName text on the first name input bar.
  userEvent.type(screen.getByTestId('locationInput'), tooLongLocation);

  // Blur on firstName input bar.
  screen.getByTestId('usernameInput').focus();

  // Should show 'Required' error message.
  await waitFor(() => expect(screen.getByText('Must be 50 characters or less')));
});

test('type in location input with a llocationast name that is too short', async () => {
  render(<PageComponent path="/" element={<SignUp />} />);

  const tooLongLocation = 'das';
  // Focus on firstName input bar.
  screen.getByTestId('locationInput').focus();

  // Type a too long firstName text on the first name input bar.
  userEvent.type(screen.getByTestId('locationInput'), tooLongLocation);

  // Blur on firstName input bar.
  screen.getByTestId('usernameInput').focus();

  // Should show 'Required' error message.
  await waitFor(() => expect(screen.getByText('Must be longer than 5 characters')));
});
