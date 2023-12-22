const db = require('../connection');

const getSubmission = (submissionId) => {
  return db.query(`
      SELECT submissions.*
      WHERE submissions.id = $1;
    `, [submissionId])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getSubmission };
