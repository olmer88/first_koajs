const { execute } = require('./db');

/**
 * @return Promise Post[]
 */
const getAllPosts = () => execute('select * FROM firstKoajs.posts');

async function getPostById(id) {
  // language=MySQL
  const sql = 'select * from firstKoajs.posts where id = ?';
  if (!id) return null;
  const [post] = await execute(sql, [id]);
  return post;
}

const save = ({ id, title, content }) => {
  // language=MySQL
  const sql = `
    insert into posts(id, title, content)  VALUES (?, ?, ?)
    ON DUPLICATE KEY UPDATE title = ?, content = ?
  `;
  return execute(sql, [id || null, title, content, title, content]);
};

module.exports = { getAllPosts, getPostById, save };
