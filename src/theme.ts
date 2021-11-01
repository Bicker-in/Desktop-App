import { extendTheme } from '@chakra-ui/react';

const colors = {
  // primary: {
  //   500:
  // }
  brand: {
    'primary-dark': '#28282B',
    'primary-light': '#1C4D40',
    secondary: '#D2D2D2',
    highlight: '#0FC100',
  },
};

const fonts = {
  primary: 'Roboto',
};

export default extendTheme({ colors, fonts });
