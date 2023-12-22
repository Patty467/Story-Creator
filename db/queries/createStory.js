const db = require('../connection');

const createStory = (storyTitle, storyContent) => {
  return db.query(`
    INSERT INTO stories (title, content) VALUES ($1, $2)
  `, [storyTitle, storyContent])
    .then(data => {
      return data.rows;
    });
};

module.exports = { createStory };