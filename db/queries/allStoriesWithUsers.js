const db = require('../connection');

const getAllStoriesWithUsers = () => {
  return db.query(`
    SELECT users.*, stories.*
    FROM users
    INNER JOIN stories ON users.id = stories.users_id;
  `)
  .then(data => data.rows);
};

module.exports = { getAllStoriesWithUsers };