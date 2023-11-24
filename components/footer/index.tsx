import { useRouter } from 'next/router';
import { FC } from 'react';

import { Routes, RoutesEnum } from '@/constants/routes';
import { Box } from '@/element';

import { HomeSVG, StatsSVG, UserSVG } from '../svg';

const ActivePoint: FC<{ pathMatch: boolean }> = ({ pathMatch }) => {
  if (!pathMatch) return null;

  return (
    <Box width="0.3rem" height="0.3rem" bg="PRIMARY_100" borderRadius="50%" />
  );
};

const Footer: FC = () => {
  const { asPath, push } = useRouter();

  return (
    <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" bg="BACKGROUND_300">
      <Box
        p="2rem"
        gap="1rem"
        opacity="0.4"
        display="flex"
        alignItems="center"
        flexDirection="column"
        color={
          asPath === Routes[RoutesEnum.Stats] ? 'PRIMARY_100' : 'NEUTRAL_300'
        }
      >
        <StatsSVG maxWidth="1.7rem" maxHeight="1.7rem" width="100%" />
        <ActivePoint pathMatch={Routes[RoutesEnum.Stats] === asPath} />
      </Box>
      <Box
        p="2rem"
        gap="1rem"
        display="flex"
        alignItems="center"
        flexDirection="column"
        onClick={() => push(Routes[RoutesEnum.Home])}
        color={
          asPath === Routes[RoutesEnum.Home] ? 'PRIMARY_100' : 'NEUTRAL_300'
        }
      >
        <HomeSVG maxWidth="1.7rem" maxHeight="1.7rem" width="100%" />
        <ActivePoint pathMatch={Routes[RoutesEnum.Home] === asPath} />
      </Box>
      <Box
        p="2rem"
        gap="1rem"
        display="flex"
        alignItems="center"
        flexDirection="column"
        onClick={() => push(Routes[RoutesEnum.Profile])}
        color={
          asPath === Routes[RoutesEnum.Profile] ? 'PRIMARY_100' : 'NEUTRAL_300'
        }
      >
        <UserSVG maxWidth="1.7rem" maxHeight="1.7rem" width="100%" />
        <ActivePoint pathMatch={Routes[RoutesEnum.Profile] === asPath} />
      </Box>
    </Box>
  );
};

export default Footer;
