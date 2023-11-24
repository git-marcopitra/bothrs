import { useRouter } from 'next/router';
import { FC } from 'react';

import { Card } from '@/components';
import QuickAction from '@/components/quick-action';
import { AtomSVG, LampSVG, RandomSVG } from '@/components/svg';
import { Box, Typography } from '@/element';

import { QUICK_ACTIONS } from './home.data';

const Home: FC = () => {
  const name = 'Stef';
  const { push } = useRouter();

  return (
    <Box p="2rem">
      <Box display="flex" justifyContent="space-between">
        <Box mt="0.5rem">
          <Typography as="h2" fontSize="2.125rem" color="NEUTRAL_100">
            Hi {name}👋
          </Typography>
          <Typography
            as="h3"
            color="NEUTRAL_200"
            fontWeight="400"
            fontSize="1.25rem"
          >
            How can I help you today?
          </Typography>
        </Box>
        <QuickAction Icon={LampSVG} color="SECONDARY_200" label="extra" />
      </Box>
      <Box
        my="1rem"
        gap="0.8rem"
        display="grid"
        gridTemplateColumns="repeat(5, 1fr)"
      >
        {QUICK_ACTIONS.map((quickAction, index) => (
          <QuickAction key={index} {...quickAction} />
        ))}
      </Box>
      <Box mt="1.25rem" display="flex" flexDirection="column" gap="2rem">
        <Card
          Icon={LampSVG}
          title="Tip of the day"
          iconColor="PRIMARY_300"
          buttons={[
            { text: 'See all', action: () => push('/tip') },
            { text: 'Explore tip', action: () => push('/tip') },
          ]}
        >
          <Box
            p="2rem"
            color="NEUTRAL_100"
            minHeight="12rem"
            backgroundSize="cover"
            backgroundImage="url(/img/food.png)"
          >
            <Typography mb="0.5rem" fontSize="1.25rem" fontWeight="900">
              Swallowing
            </Typography>
            <Typography width="11rem">
              If you struggle with swallowing, eat soft foods wherever possible.
              You can check out some of our soft food recipes for ideas here.
            </Typography>
          </Box>
        </Card>
        <Card
          Icon={LampSVG}
          title="Community"
          iconColor="TERTIARY_100"
          buttons={[
            { text: 'See all', action: () => push('/tip') },
            { text: 'Add topic', action: () => push('/tip') },
          ]}
        >
          <Box p="1.5rem" color="NEUTRAL_100" minHeight="12rem">
            <Typography mb="0.5rem" fontSize="1.25rem" fontWeight="900">
              This week’s topics
            </Typography>
            <Box
              px="3rem"
              mt="1rem"
              pb="1rem"
              gap="1rem"
              ml="-3.5rem"
              width="100vw"
              display="flex"
              overflowX="scroll"
            >
              <Box
                p="1rem"
                gap="1rem"
                display="flex"
                minWidth="20rem"
                bg="BACKGROUND_100"
                borderRadius="0.5rem"
                flexDirection="column"
              >
                <Box display="flex" gap="1rem">
                  <RandomSVG
                    width="100%"
                    maxWidth="1.8rem"
                    maxHeight="1.8rem"
                  />
                  <Box>
                    <Typography fontSize="0.875rem" color="NEUTRAL_200">
                      posted 2 days ago • Dries Droopy
                    </Typography>
                    <Typography fontWeight="700">My MG experience</Typography>
                  </Box>
                </Box>
                <Typography mt="0.7rem">
                  This is a sharing about my recovery from Myasthenia Gravis
                  (MG). This disease started initially from my jaw. When I ate
                  or chew something, I would feel tired soon and then had to
                  stop chewing because I had no strength to do it...
                </Typography>
              </Box>
              <Box
                p="1rem"
                gap="1rem"
                display="flex"
                minWidth="20rem"
                bg="BACKGROUND_100"
                borderRadius="0.5rem"
                flexDirection="column"
              >
                <Box display="flex" gap="1rem">
                  <RandomSVG
                    width="100%"
                    maxWidth="1.8rem"
                    maxHeight="1.8rem"
                  />
                  <Box>
                    <Typography fontSize="0.875rem" color="NEUTRAL_200">
                      posted 2 days ago • Dries Droopy
                    </Typography>
                    <Typography fontWeight="700">My MG experience</Typography>
                  </Box>
                </Box>
                <Typography mt="0.7rem">
                  This is a sharing about my recovery from Myasthenia Gravis
                  (MG). This disease started initially from my jaw. When I ate
                  or chew something, I would feel tired soon and then had to
                  stop chewing because I had no strength to do it...
                </Typography>
              </Box>
              <Box
                p="1rem"
                gap="1rem"
                display="flex"
                minWidth="20rem"
                bg="BACKGROUND_100"
                borderRadius="0.5rem"
                flexDirection="column"
              >
                <Box display="flex" gap="1rem">
                  <RandomSVG
                    width="100%"
                    maxWidth="1.8rem"
                    maxHeight="1.8rem"
                  />
                  <Box>
                    <Typography fontSize="0.875rem" color="NEUTRAL_200">
                      posted 2 days ago • Dries Droopy
                    </Typography>
                    <Typography fontWeight="700">My MG experience</Typography>
                  </Box>
                </Box>
                <Typography mt="0.7rem">
                  This is a sharing about my recovery from Myasthenia Gravis
                  (MG). This disease started initially from my jaw. When I ate
                  or chew something, I would feel tired soon and then had to
                  stop chewing because I had no strength to do it...
                </Typography>
              </Box>
            </Box>
          </Box>
        </Card>
        <Card
          Icon={AtomSVG}
          title="MG Update"
          iconColor="SECONDARY_200"
          buttons={[
            { text: 'See all', action: () => push('/tip') },
            { text: 'Check update', action: () => push('/tip') },
          ]}
        >
          <Box
            p="2rem"
            color="NEUTRAL_100"
            minHeight="12rem"
            backgroundSize="cover"
            backgroundImage="url(/img/food.png)"
          >
            <Typography mb="0.5rem" fontSize="1.25rem" fontWeight="900">
              Swallowing
            </Typography>
            <Typography width="11rem">
              If you struggle with swallowing, eat soft foods wherever possible.
              You can check out some of our soft food recipes for ideas here.
            </Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Home;
