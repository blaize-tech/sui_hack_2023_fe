const BaseButton = () => ({
  fontFamily: 'orbitron',
  padding: '12px 32px',
  margin: 0,
  fontWeight: 900,
  textAlign: 'center',
  borderRadius: '8px',
  outline: 'none',
  border: '0',
  borderColor: 'transparent',
  textTransform: 'uppercase',
  textDecoration: 'none',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'nowrap',
  alignItems: 'center',
  cursor: 'pointer',
  fontSize: '14px',
  position: 'relative',
  color: 'white',
  bgColor: 'blue.btn',
  h: '48px',
  letterSpacing: '1.4px',
  zIndex: 1,
  _active: {
    color: 'white',
  },
  _hover: {
    color: 'white',
    bgColor: 'blue.btnHover',
  },
  _focus: {
    color: 'white',
  },
});

const ButtonPrimary = () => ({
  margin: 0,
  width: '100%',
  fontWeight: 600,
  textAlign: 'center',
  borderRadius: '2px',
  outline: 'none',
  border: '1px',
  borderColor: 'transparent',
  textDecoration: 'none',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'nowrap',
  alignItems: 'center',
  cursor: 'pointer',
  position: 'relative',
  zIndex: 1,
  bg: 'white',
  padding: '13px 24px',
  fontSize: '17px',
  lineHeight: '27px',
  color: 'black',
  boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.6)',
  _focus: {
    bg: '#ffb037',
    color: 'black',
    boxShadow: '0 10px 20px rgba(255, 152, 5, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6)',
  },
  _hover: {
    bg: '#ffb037',
    color: 'black',
    boxShadow: '0 10px 20px rgba(255, 152, 5, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6)',
  },
  _active: {
    bg: '#ffb037',
    color: 'black',
    boxShadow: '0 10px 20px rgba(255, 152, 5, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6)',
  },
});

const variants = {
  base: BaseButton,
  primary: ButtonPrimary,
};

const defaultProps = {
  variant: 'base',
};

const button = {
  baseStyle: {},
  variants,
  sizes: {},
  defaultProps,
};

export default button;
