import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  try {
    const result = await sql`CREATE TABLE posts ( id varchar(255), title varchar(255), date varchar(255), html text);`;
    return res.status(200).json({ result });
  } catch (err) {
    return res.status(500).json({ err })
  }
}
