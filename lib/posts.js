import { sql } from '@vercel/postgres';

export async function getSortedPostsData() {
  try {
    const { rows } = await sql`SELECT * FROM posts ORDER BY date DESC`;
    return rows.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getAllPostIds() {
  const { rows } = await sql`SELECT * FROM posts`;

  return rows.map((post) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
}

export async function getPostData(id) {
  const { rows } = await sql`SELECT * FROM posts WHERE id = ${id}`;
  const post = rows[0];

  return {
    id: post.id,
    ...post,
  };
}
