import React, { ReactElement } from 'react';
import { ChakraProvider, Box, Text } from '@chakra-ui/react';
// import Loader from './components/Loader';
// eslint-disable-next-line import/extensions
// import Screen from './components/Screen';
// import Drawer from './components/Drawer';
// import logo from './logo.svg';
// import tauriCircles from './tauri.svg';
// import tauriWord from './wordmark.svg';
import './App.css';
// eslint-disable-next-line import/extensions
import theme from './theme';

/**
 * App
 *
 * @description Root component
 * @returns {ReactElement} Root component for Bickerin app
 */
function App(): ReactElement {
  // const [isClicked, setIsClicked] = React.useState(false);
  return (
    <ChakraProvider theme={theme}>
      <Box bgColor="brand.primary-dark" height="100vh">
        {/* <Loader /> */}
        <a href="/about">
          <Text
            color="white"
            fontFamily="primary"
            fontSize="3xl"
          >
            Hellosadsdaadssaddsa
          </Text>
        </a>
      </Box>
    </ChakraProvider>
  );
}

export default App;
