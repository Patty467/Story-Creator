const db = require('../connection');

const completeStory = async (storyId) => {
  db.query(`UPDATE stories SET completed = true WHERE id = $1`, [storyId]);
};

module.exports = { completeStory };