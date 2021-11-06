import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Login from '../../src/routes/login';
import theme from '../../src/theme';

afterEach(cleanup);

test('loads login page', async () => {
  render(<ChakraProvider theme={theme}><Login /></ChakraProvider>);

  expect(screen.getByText('Bicker'));
  expect(screen.getByText('Login >>'));
  expect(screen.getByText('or signup...'));
});

test('hover login button', async () => {
  render(<ChakraProvider theme={theme}><Login /></ChakraProvider>);

  userEvent.hover(screen.getByText('Login >>'));

  const loginButton = document.getElementsByTagName('button')[0];

  const loginButtonStyle = window.getComputedStyle(loginButton);
});

