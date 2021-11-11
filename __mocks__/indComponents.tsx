import React, { FunctionComponent, JSXElementConstructor, ReactElement } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/theme';

interface PageComponentProps {
  path: string;
  element: ReactElement<any, string | JSXElementConstructor<any>>;
}

const PageComponent: FunctionComponent<PageComponentProps> = ({ path, element }) => (
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path={path} element={element} />
      </Routes>
    </ChakraProvider>
  </BrowserRouter>
);
export { PageComponent };
