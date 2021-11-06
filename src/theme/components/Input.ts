const input = {
  baseStyle: {
    field: {
      backgroundColor: 'brand.primary-gray',
      borderColor: 'brand.primary-gray',
      borderWidth: 2,
      color: '',
      fontFamily: 'primary',
      ':focus': {
        borderColor: 'brand.secondary',
      },
    },
  },
  variants: {
    large: {
      field: {
        color: 'white',
        fontWeight: 'light',
      },
    },
    small: {
      field: {
        height: '35px',
        width: 'xs',
        color: 'white',
        fontWeight: 'light',
      },
    },
  },
  defaultProps: {
    variant: null,
    placeholder: 'Type here',
  },
};

export default input;
