const Card = {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'brand.secondary-dark',
    gap: 6,
    borderRadius: 'md',
  },
  variants: {
    small: {
      paddingY: '10',
      paddingX: '6',
      position: 'relative',
    },
    large: {
      paddingY: '4',
      paddingX: '6',
      position: 'relative',
    },
  },
};

export default Card;
