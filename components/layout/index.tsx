import { FC, PropsWithChildren } from 'react';

import { Box } from '@/element';

import Footer from '../footer';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Box
    bg="BACKGROUND_300"
    height="100vh"
    display="flex"
    flexDirection="column"
    overflow="hidden"
  >
    <Box flex="1" overflowY="auto">
      {children}
    </Box>
    <Footer />
  </Box>
);

export default Layout;
