import { Global, ThemeProvider } from '@emotion/react';
import { FC, PropsWithChildren } from 'react';

import { GlobalStyles } from '@/styles';
import { colors } from '@/styles/common';

const ThemeManager: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={{ colors }}>
    <Global styles={GlobalStyles} />
    {children}
  </ThemeProvider>
);

export default ThemeManager;
