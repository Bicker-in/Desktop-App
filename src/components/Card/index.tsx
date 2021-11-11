import { Box, useStyleConfig, BoxProps } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';

interface CardProps extends BoxProps {
  variant: string;
}

/**
 * Card
 *
 * @param {CardProps} props Component Props
 * @param {string} props.variant String that contains the desired style variant for the Card Component.
 * @description Wrapper component
 * @returns {FunctionComponent<CardProps>} Card Component
 */
const Card: FunctionComponent<CardProps> = (props) => {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig('Card', { variant });
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
};

export default Card;
