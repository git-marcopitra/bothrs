import { FC, PropsWithChildren } from 'react';

import { Box } from '@/element';

import Footer from '../footer';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Box
    height="100vh"
    display="flex"
    overflow="hidden"
    bg="BACKGROUND_300"
    flexDirection="column"
  >
    <Box flex="1" overflowY="auto">
      {children}
    </Box>
    <Footer />
  </Box>
);

export default Layout;
