import React, { ReactElement } from 'react';
import { Box } from '@chakra-ui/react';
import './style.css';

/**
 * Loader
 *
 * @description Loading Circle
 * @returns {ReactElement} Loading Circle Element
 */
function Loader(): ReactElement {
  return (
    <Box>
      <Box
        className="loadingSymbol"
        boxSize={75}
        borderWidth="thick"
        borderColor="brand.primary-dark"
        borderBottomColor="brand.highlight"
        borderRadius="full"
        borderTopColor="brand.highlight"
      />
    </Box>
  );
}

export default Loader;
