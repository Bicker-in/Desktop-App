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
    none: {
      field: {
        backgroundColor: 'inherit',
        borderWidth: 0,
        color: 'white',
        fontFamily: 'primary',
        '[type=file]::file-selector-button': {
          border: '2px solid #6c5ce7',
          padding: '.2em .4em',
          borderRadius: '.2em',
          backgroundColor: '#a29bfe',
          transition: '1s',
        },
      },
    },
  },
  defaultProps: {
    variant: null,
    placeholder: 'Type here',
  },
};

export default input;
