const db = require('../connection');

const query = `UPDATE submissions SET votes = votes - 1 WHERE id = $1`;

const downVote = (submissionId) => {
  return db.query(query, [submissionId])
    .then(data => {
      return data.rows;
    });
};

module.exports = { downVote };
