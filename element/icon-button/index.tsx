import { FC, PropsWithChildren } from 'react';

import { Box } from '../box';
import { IconButtonProps } from './icon-button.types';

export const IconButton: FC<PropsWithChildren<IconButtonProps>> = ({
  color,
  children,
}) => (
  <Box
    bg={color}
    display="flex"
    width="3.125rem"
    height="3.125rem"
    overflow="hidden"
    borderRadius="50%"
    alignItems="center"
    justifyContent="center"
  >
    {children}
  </Box>
);

export * from './icon-button.types';
