const { execute } = require('./db');

/**
 * @return Promise Post[]
 */
const getAllPosts = () => execute('select * FROM firstKoajs.posts');

const getPostById = id => {
  // language=MySQL
  const sql = 'select * from firstKoajs.posts where id = ?';
  return execute(sql, [id]);
};

module.exports = { getAllPosts, getPostById };
