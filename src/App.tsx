import React, { ReactElement } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/700.css';
import theme from './theme';
import AppRoutes from './routes';

/**
 * App
 *
 * @description Root component
 * @returns {ReactElement} Root component for Bickerin app
 */
function App(): ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
