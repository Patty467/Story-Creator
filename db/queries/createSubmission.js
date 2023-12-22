const db = require('../connection');

const createSubmission = (submissionContent, storyId) => {
  return db.query(`
    INSERT INTO submissions (content, stories_id, users_id) VALUES ($1, $2, 5)
  `, [submissionContent, storyId])
    .then(data => {
      return data.rows;
    });
};

module.exports = { createSubmission };