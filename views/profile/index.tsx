import { FC } from 'react';

import { PencilSVG, RandomSVG } from '@/components/svg';
import { Box, Typography } from '@/element';

const Profile: FC = () => {
  const name = 'Tyron';
  const role = 'MG patient';
  const email = 'tyron.droopy@gmail.com';

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box
        gap="1rem"
        display="flex"
        minHeight="20rem"
        alignItems="center"
        bg="BACKGROUND_100"
        flexDirection="column"
        justifyContent="center"
      >
        <Box display="flex" flexDirection="column" alignItems="flex-end">
          <Box
            mr="-1rem"
            mb="-2rem"
            width="3rem"
            height="3rem"
            display="flex"
            bg="NEUTRAL_100"
            borderRadius="50%"
            border="3px solid"
            alignItems="center"
            position="relative"
            justifyContent="center"
            borderColor="BACKGROUND_100"
          >
            <PencilSVG maxHeight="1.25rem" maxWidth="1.25rem" width="100%" />
          </Box>
          <RandomSVG maxHeight="6rem" maxWidth="6rem" width="100%" />
        </Box>
        <Box
          gap="0.5rem"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Typography fontSize="1.5rem" color="NEUTRAL_100" fontWeight="700">
            {name}
          </Typography>
          <Typography color="NEUTRAL_200" fontWeight="700">
            {role}
          </Typography>
        </Box>
      </Box>
      <Box p="2rem" display="flex" flexDirection="column" gap="1.5rem" flex="1">
        <Box display="flex" flexDirection="column" gap="0.5rem">
          <Typography color="NEUTRAL_200" fontWeight="700" fontSize="0.75rem">
            Email address
          </Typography>
          <Typography color="NEUTRAL_100" fontWeight="700">
            {email}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" gap="0.5rem">
          <Typography color="NEUTRAL_200" fontWeight="700" fontSize="0.75rem">
            Password
          </Typography>
          <Typography color="NEUTRAL_100" fontWeight="700">
            ••••••••••••••
          </Typography>
        </Box>
      </Box>
      <Box
        mx="2rem"
        py="2rem"
        gap="2rem"
        display="flex"
        borderTop="1px solid"
        flexDirection="column"
        borderColor="BACKGROUND_100"
      >
        <Typography color="ORANGE_100" fontWeight="700">
          Log out
        </Typography>
        <Typography color="RED_100" fontWeight="700">
          Delete Account
        </Typography>
      </Box>
    </Box>
  );
};

export default Profile;
