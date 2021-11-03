import React, { ReactElement } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import theme from './theme';

/**
 * App
 *
 * @description Root component
 * @returns {ReactElement} Root component for Bickerin app
 */
function App(): ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <Box bgColor="brand.primary-dark" height="100vh">
        <h1>Welcome to React Parcel Micro App!</h1>
        <p>Hard to get more minimal than this React app.</p>
      </Box>
    </ChakraProvider>
  );
}

export default App;
