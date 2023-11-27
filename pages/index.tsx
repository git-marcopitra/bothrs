import { NextPage } from 'next';

import Layout from '@/components/layout';
import { fetchContent } from '@/services/contentful';
import Home from '@/views/home';
import { IFeedPosts } from '@/views/home/home.types';

interface HomePageProps {
  feedPosts: ReadonlyArray<IFeedPosts>;
}

const HomePage: NextPage<HomePageProps> = ({ feedPosts }) => (
  <Layout>
    <Home posts={feedPosts} />
  </Layout>
);

export async function getStaticProps() {
  const feedPosts = await fetchContent('feed');

  return {
    props: { feedPosts },
  };
}

export default HomePage;
