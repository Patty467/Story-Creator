const db = require('../connection');

const getStories = (storyId) => {
  return db.query(`
      SELECT stories.*, users.name
      FROM stories
      JOIN users ON stories.users_id = users.id
      WHERE stories.id = $1
    `, [storyId])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getStories };
