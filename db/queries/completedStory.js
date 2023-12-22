const db = require('../connection');

const getCompletedStory = (storyId) => {
  return db.query(`
    SELECT stories.*, users.*, submissions.*
    FROM stories
    JOIN users ON stories.user_id = users.id
    JOIN submissions ON stories.id = submissions.story_id
    WHERE stories.id = $1 AND submissions.accepted = true;
  `, [storyId])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getCompletedStory };
