const db = require('../connection');

const createSubmission = async (submissionContent, storyId) => {
  const result = await db.query('SELECT MAX(id) FROM submissions');
  const maxId = result.rows[0].max;
  const newId = maxId ? maxId + 1 : 1;

  console.log('Inserting data:', { id: newId, content: submissionContent, stories_id: storyId, users_id: 5 });

  return db.query(`
    INSERT INTO submissions (id, content, stories_id, users_id) VALUES ($1, $2, $3, 5)
  `, [newId, submissionContent, storyId])
    .then(data => {
      return data.rows;
    });
};

module.exports = { createSubmission };