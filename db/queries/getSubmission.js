const db = require('../connection');

const getSubmission = (storyId) => {
  return db.query(`
      SELECT submissions.*, users.name
      FROM submissions
      JOIN users ON submissions.users_id = users.id
      WHERE stories_id = $1
      ORDER BY votes DESC;
    `, [storyId])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getSubmission };
