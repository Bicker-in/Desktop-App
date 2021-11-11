import React, { ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import './style.css';

const loaderSize = {
  sm: 25,
  md: 75,
  lg: 125,
};

type LoaderThickness = 'thin' | 'medium' | 'thick';

type BackgroundColor = string;

type LoaderSizeType = 'sm' | 'md' | 'lg';

interface LoaderPropsType {
  size: LoaderSizeType;
  width: LoaderThickness;
  bgColor: BackgroundColor;
}

/**
 * Loader
 *
 * @param {LoaderPropsType} props Component's props
 * @param {string} props.size Specific size of the loader symbol
 * @param {string} props.width Specific border width of the loader symbol
 * @param {string} props.bgColor Specific background Color of the loader symbol
 * @description Loading Circle
 * @returns {ReactElement} Loading Circle Element
 */
const Loader = ({ size, width, bgColor }: LoaderPropsType): ReactElement => {
  return (
    <Box data-testid="loadingSpinner">
      <Box
        className="loadingSymbol"
        boxSize={loaderSize[size]}
        borderWidth={width}
        borderColor="brand.secondary"
        borderBottomColor={bgColor}
        borderTopColor={bgColor}
        borderRadius="full"
      />
    </Box>
  );
};

export default Loader;
