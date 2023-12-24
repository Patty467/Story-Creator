const db = require('../connection');

const createSubmission = async (submissionContent, storyId, user_id) => {
  const result = await db.query('SELECT MAX(id) FROM submissions');
  const maxId = result.rows[0].max;
  const newId = maxId ? maxId + 1 : 1;

  return db.query(`
    INSERT INTO submissions (id, content, stories_id, users_id) VALUES ($1, $2, $3, $4)
  `, [newId, submissionContent, storyId, user_id])
    .then(data => {
      return data.rows;
    });
};

module.exports = { createSubmission };