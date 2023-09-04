import { useUser } from '@auth0/nextjs-auth0/client';
import Layout from '../components/layout';

export default function Profile() {
  const { user } = useUser()

  if (!user || user.isLoggedIn === false) {
    return <Layout>Loading...</Layout>
  }

  return (
    <Layout>
      <h1>Hello, there</h1>
      <p>Username: {user.name}</p>
      <p>Email: {user.email}</p>
    </Layout>
  );
}
