const Text = {
  baseStyle: {
    fontFamily: 'primary',
    color: 'white',
    padding: '2',
    fontWeight: 'normal',
    fontSize: 'md',
  },
  variants: {
    link: {
      fontFamily: 'primary',
      fontSize: 'sm',
      color: 'brand.secondary',
      fontWeight: 'light',
      ':hover': {
        textDecoration: 'underline',
      },
    },
    alertFormMessage: {
      fontFamily: 'primary',
      color: 'brand.alert',
      fontSize: 'xs',
    },
  },
};

export default Text;
