const db = require('../connection');

const createStory = async (storyTitle, storyContent, user_id) => {
  const result = await db.query('SELECT MAX(id) FROM stories');
  const maxId = result.rows[0].max;
  const newId = maxId ? maxId + 1 : 1;

  return db.query(`
    INSERT INTO stories (id, title, content, users_id) VALUES ($1, $2, $3, $4)
  `, [newId, storyTitle, storyContent, user_id])
    .then(data => {
      return data.rows;
    });
};

module.exports = { createStory };