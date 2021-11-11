import React, { FunctionComponent } from 'react';
import { useBreakpointValue } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  icon: IconDefinition;
}

/**
 * Icon
 *
 * @description The component that is used to show all icons.
 * @param {IconProps} props Icon Props
 * @param {IconDefinition} props.icon Icon for the component to show.
 * @returns {FunctionComponent<IconProps>} Icon Component
 */
const Icon: FunctionComponent<IconProps> = ({ icon }) => {
  const size = useBreakpointValue({ sm: 'lg', md: '1x', lg: '2x', xl: '3x' });

  return <FontAwesomeIcon icon={icon} color="white" size={size as SizeProp} />;
};

export default Icon;
