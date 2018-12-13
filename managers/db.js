const mysql = require('mysql2/promise');

const connectionPromise = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'firstKoajs'
});

async function execute(sql) {
  const connection = await connectionPromise;
  const [rows] = await connection.execute(sql);
  return rows;
}

module.exports = {
  connectionPromise,
  execute,
};
