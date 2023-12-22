const db = require('../connection');

const getStories = (storyId) => {
  return db.query(`
      SELECT stories.*, users.*, submissions.*
      FROM stories
      JOIN users ON stories.users_id = users.id
      JOIN submissions ON stories.id = submissions.stories_id
      WHERE stories.id = $1
      GROUP BY stories.id;
    `, [storyId])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getStories };
