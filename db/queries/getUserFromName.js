const db = require('../connection');

const getUserFromName = async (username) => {
  const result = await db.query('SELECT id FROM users WHERE name = $1', [username]);
  return result.rows[0];
};

module.exports = getUserFromName;