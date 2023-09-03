import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((filename) => {
    const id = filename.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, filename);
    const filecontents = fs.readFileSync(fullPath, 'utf8');

    const result = matter(filecontents);
    return {
      id,
      ...result.data,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fn) => {
    return {
      params: {
        id: fn.replace(/\.md/, ''),
      },
    };
  });
}

export function getPostData(id) {
  const fullpath = path.join(postsDirectory, `${id}.md`);
  const contents = fs.readFileSync(fullpath, 'utf8');
  const result = matter(contents);
  return {
    id,
    ...result.data,
  };
}
