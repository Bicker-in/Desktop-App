// const Button = {
//   baseStyle: {
//     field: {
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: 'brand.secondary',
//       borderRadius: 'md',
//     },
//   },

//   variants: {
//     regular: {
//       field: {
//         paddingY: '4',
//         paddingX: '4',
//         fontSize: 'xl',
//       },
//     },
//   },
// };

const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'regular',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'brand.secondary',
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: 'sm',
      // px: 4, // <-- px is short for paddingLeft and paddingRight
      // py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    xl: {
      fontSize: 'xl',
      px: 8, // <-- these values are tokens from the design system
      py: 1,
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'purple.500',
      color: 'purple.500',
    },
    solid: {
      bg: 'brand.secondary',
      color: 'white',
      ':hover': {
        bg: 'brand.primary-gray',
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
};

export default Button;
