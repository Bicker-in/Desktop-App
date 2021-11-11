import { Box } from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';

interface BickerinSVGProps {
  color?: string;
}

const BickerinSVG: FunctionComponent<BickerinSVGProps> = ({ color = '#ffffff' }) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="50.000000pt"
    height="50.000000pt"
    viewBox="0 0 50.000000 50.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(13.000000, 35.000000) scale(0.010000,-0.009000)"
      fill={color}
      stroke="none"
    >
      <path
        d="M1590 2290 c0 -5 4 -10 9 -10 4 0 11 -222 15 -492 3 -271 9 -586 13
        -700 l6 -208 313 0 314 0 0 33 c0 88 20 979 26 1170 l6 217 -351 0 c-227 0
        -351 -4 -351 -10z"
      />
      <path
        d="M40 1155 l0 -1138 333 7 c182 4 359 12 392 17 125 22 269 129 316
        235 45 101 53 159 51 379 0 116 -6 234 -12 264 -23 120 -105 238 -196 280 -24
        12 -44 25 -44 30 0 4 24 24 53 44 63 41 107 103 139 195 21 60 23 85 23 247 0
        193 -9 252 -50 339 -51 108 -129 172 -254 209 -57 16 -111 20 -408 24 l-343 6
        0 -1138z m615 803 c78 -41 94 -89 95 -286 0 -142 -2 -156 -24 -200 -45 -89
        -92 -111 -238 -112 l-98 0 0 303 c0 167 3 307 8 311 13 14 225 1 257 -16z m15
        -930 c103 -53 124 -120 118 -393 -3 -158 -5 -184 -23 -214 -41 -69 -59 -76
        -226 -79 l-149 -3 0 355 0 356 118 0 c102 0 123 -3 162 -22z"
      />
      <path d="M1630 355 l0 -295 315 0 315 0 0 295 0 295 -315 0 -315 0 0 -295z" />
    </g>
  </svg>
);

BickerinSVG.defaultProps = {
  color: '#ffffff',
};

const BickerinIcon: FunctionComponent = () => (
  <Box backgroundColor="brand.secondary" borderRadius="md">
    <BickerinSVG />
  </Box>
);

export default BickerinIcon;
