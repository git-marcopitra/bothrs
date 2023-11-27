import { NextPage } from 'next';

import Layout from '@/components/layout';
import Profile from '@/views/profile';

const ProfilePage: NextPage = () => (
  <Layout>
    <Profile />
  </Layout>
);

export default ProfilePage;
