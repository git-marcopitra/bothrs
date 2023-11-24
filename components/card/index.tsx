import { FC, PropsWithChildren } from 'react';

import { Box, Typography } from '@/element';

import { CardProps } from './card.types';

const Card: FC<PropsWithChildren<CardProps>> = ({
  Icon,
  title,
  buttons,
  children,
  iconColor,
}) => (
  <Box as="article" borderRadius="1rem" bg="BACKGROUND_200">
    <Box
      p="1rem"
      gap="1rem"
      display="flex"
      color="NEUTRAL_100"
      alignItems="center"
      bg="BACKGROUND_100"
      borderTopLeftRadius="1rem"
      borderTopRightRadius="1rem"
    >
      <Box
        p="0.5rem"
        width="2.5rem"
        bg={iconColor}
        height="2.5rem"
        color="NEUTRAL_100"
        borderRadius="50%"
      >
        <Icon maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
      </Box>
      <Typography as="h4" fontSize="1.375rem">
        {title}
      </Typography>
    </Box>
    {children}
    <Box
      display="grid"
      color="NEUTRAL_100"
      bg="BACKGROUND_100"
      borderBottomLeftRadius="1rem"
      borderBottomRightRadius="1rem"
      gridTemplateColumns="1fr 1fr"
    >
      {buttons?.map(({ text, action }, index) => (
        <Typography
          p="1.2rem"
          key={index}
          onClick={action}
          fontWeight="900"
          textAlign="center"
          textTransform="uppercase"
        >
          {text}
        </Typography>
      ))}
    </Box>
  </Box>
);

export default Card;
