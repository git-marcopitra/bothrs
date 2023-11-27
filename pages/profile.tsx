import { NextPage } from 'next';

import Layout from '@/components/layout';
import Profile from '@/views/profile';

export interface ProfilePageProps {
  data: {
    name: string;
    role: string;
    email: string;
    password: string;
    avatarURL: string;
  };
}

const ProfilePage: NextPage<ProfilePageProps> = (props) => (
  <Layout>
    <Profile {...props.data} />
  </Layout>
);

export const getServerSideProps = async () => {
  const data = await fetch('http://localhost:3000/api/v1/users?id=0').then(
    (response) => response.json()
  );

  return {
    props: { data },
  };
};

export default ProfilePage;
