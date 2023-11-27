import { useRouter } from 'next/router';
import { FC } from 'react';

import { Card } from '@/components';
import QuickAction from '@/components/quick-action';
import { LampSVG, RandomSVG } from '@/components/svg';
import { useUser } from '@/context/user';
import { Box, Typography } from '@/element';

import { QUICK_ACTIONS, QUICK_ACTIONS_MAP } from './home.data';
import { HomeProps } from './home.types';
import { getDaysFromNow } from './home.utils';

const Home: FC<HomeProps> = ({ posts }) => {
  const { name } = useUser();
  const { push } = useRouter();

  return (
    <Box p="2rem">
      <Box display="flex" justifyContent="space-between">
        <Box mt="0.5rem">
          <Typography as="h2" fontSize="2.125rem" color="NEUTRAL_100">
            Hi {name.split(' ')[0]}👋
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
        {posts.map((data, index) => (
          <Card
            key={index}
            title={data.fields.title}
            Icon={QUICK_ACTIONS_MAP[data.fields.type].Icon}
            iconColor={QUICK_ACTIONS_MAP[data.fields.type].color}
            buttons={[
              {
                text: data.fields.mainButton,
                action: () => push(data.fields.mainPath),
              },
              {
                text: data.fields.redirectButton,
                action: () => push(data.fields.redirectPath),
              },
            ]}
          >
            {data.fields.communityPosts?.length ? (
              <Box p="1.5rem" color="NEUTRAL_100" minHeight="12rem">
                <Typography mb="0.5rem" fontSize="1.25rem" fontWeight="900">
                  {data.fields.subtitle}
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
                  {data.fields.communityPosts.map(
                    (communityPost, postIndex) => (
                      <Box
                        p="1rem"
                        gap="1rem"
                        key={postIndex}
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
                              {getDaysFromNow(communityPost.fields.postedAt)}
                              {' days ago '}• {communityPost.fields.postedBy}
                            </Typography>
                            <Typography fontWeight="700">
                              {communityPost.fields.title}
                            </Typography>
                          </Box>
                        </Box>
                        <Typography
                          mt="0.7rem"
                          maxHeight="6rem"
                          overflow="hidden"
                          wordWrap="break-word"
                          textOverflow="ellipsis"
                        >
                          {communityPost.fields.content}
                        </Typography>
                      </Box>
                    )
                  )}
                </Box>
              </Box>
            ) : (
              <Box
                p="2rem"
                minHeight="12rem"
                color="NEUTRAL_100"
                backgroundSize="cover"
                backgroundImage={`url(${
                  data.fields.background!.fields.file.url
                })`}
              >
                <Typography mb="0.5rem" fontSize="1.25rem" fontWeight="900">
                  {data.fields.subtitle}
                </Typography>
                <Typography width="11rem">{data.fields.description}</Typography>
              </Box>
            )}
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
