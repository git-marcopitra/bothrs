import { NextPage } from 'next';
import Link from 'next/link';

import { Box } from '@/element';

const NotFound: NextPage = () => (
  <Link href="/">
    <Box>Go back home</Box>
  </Link>
);

export default NotFound;
