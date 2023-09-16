import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const styles = {
  styles: {
    global: (props: StyleFunctionProps) => ({
      html: {
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      body: {
        fontFamily: 'poppins',
        color: 'white',
        bg: 'gradient.60',
        lineHeight: 'base',
        flexGrow: 1,
      },
      '*::placeholder': {
        color: mode('gray.400', 'whiteAlpha.400')(props),
      },
      '*, *::before, &::after': {
        borderColor: mode('gray.200', 'whiteAlpha.300')(props),
        wordWrap: 'break-word',
      },
      'html, input, textarea, button': {
        fontFamily: 'poppins',
        fontDisplay: 'fallback',
      },
      h1: {
        fontFamily: 'orbitron',
        fontSize: '89px',
        lineHeight: '89px',
        fontWeight: '700',
        letterSpacing: '-2.67px',
        mb: 0,
      },
      h2: {},
      h3: {
        fontFamily: 'orbitron',
        fontSize: '22px',
        fontWeight: '900',
      },
      h4: {},
      select: {
        px: '20px',
      },
      '.chakra-select__icon-wrapper': {
        right: '20px !important',
      },
      '.ant-modal-content': {
        bgColor: '#182142 !important',
      },
      '.ant-modal .ant-modal-header': {
        bgColor: 'transparent !important',
      },
      '.ant-modal-title': {
        color: '#fff !important',
        fontFamily: 'orbitron',
      },
      '.ant-menu': {
        bgColor: 'transparent !important',
        m: '0 -12px !important'
      },
      '.wallet-name-wrapper': {
        display: 'flex !important',
        alignItems: 'center',
        color: '#fff !important',
      },
      '.wallet-menu-wrapper': {
        display: 'flex !important',
        alignItems: 'center',
        color: '#fff !important',
        justifyContent: 'space-between'
      },
      '.wallet-menu-wrapper .ant-btn': {
        p: '8px 16px',
        h: 'auto',
        fontSize: '12px',
      },
      '.wallet-menu-wrapper .ant-btn > span': {
        fontSize: '12px',
      },
      '.wallet-connect-install': {
        color: 'white',
      },
      '.ant-menu-item-selected, .ant-menu-item-selected:active, .ant-menu-item-selected:focus': {
        bgColor: '#e6f4ff08 !important',
      },
      '.ant-menu-item': {
        h: 'auto !important',
        p: '12px !important',
        m: '0 !important',
        w: '100% !important',
      },
      '.wallet-connect-button-text, .wallet-selector-text': {
        color: '#fff !important',
      },
      '.ant-btn': {
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
          color: 'white !important',
          bgColor: 'blue.btnHover',
        },
        _focus: {
          color: 'white',
        },
      },
    }),
  },
};

export default styles;
