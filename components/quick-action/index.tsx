import { FC } from 'react';

import { Box, IconButton, Typography } from '@/element';

import { QuickActionProps } from './quick-action.types';

const QuickAction: FC<QuickActionProps> = ({ color, Icon, label }) => (
  <Box
    display="flex"
    color="NEUTRAL_100"
    alignItems="center"
    flexDirection="column"
  >
    <IconButton color={color}>
      <Icon maxHeight="1.8rem" maxWidth="1.8rem" width="100%" />
    </IconButton>
    {label && (
      <Typography
        mt="0.25rem"
        color="NEUTRAL_200"
        fontSize="0.75rem"
        textTransform="capitalize"
      >
        {label}
      </Typography>
    )}
  </Box>
);

export default QuickAction;
