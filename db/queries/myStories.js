const db = require('../connection');

const getMyStories = (id) => {
  return db.query(`
    SELECT users.*, stories.*
    FROM users
    INNER JOIN stories ON users.id = stories.users_id;
  `, [id])
  .then(data => data.rows);
};

module.exports = { getMyStories };