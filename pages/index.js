import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { handleArrays } from '../lib/errors';
import Date from '../components/date';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home({ allPosts }) {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome to my site!</p>
        <LoginLogout user={user}/>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPosts.map(({ id, title, date }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export function LoginLogout({ user }) {
  return (!user) ? (<Link href="/api/auth/login">Login Here</Link>) : (<Link href="/api/auth/logout">Logout Here</Link>)
}

export async function getStaticProps() {
  const allPosts = await handleArrays(getSortedPostsData);
  return {
    props: {
      allPosts,
    }
  };
}
