import { extendTheme, ThemeConfig } from '@chakra-ui/react';

import colors from './colors';
import typography from './typography';
import globalStyles from './globalStyles';
import components from './components';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const breakpoints = {
  sm: '500px',
  md: '720px',
  lg: '960px',
  xl: '1280px',
  '2xl': '1484px',
};

const theme = extendTheme({
  config,
  colors,
  components,
  breakpoints,
  ...typography,
  ...globalStyles,
});

export default theme;
