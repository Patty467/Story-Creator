const db = require('../connection');

const getSubmissions = (storyId) => {
  return db.query(`
      SELECT submissions.id AS submission_id, submissions.*, users.name
      FROM submissions
      JOIN users ON submissions.users_id = users.id
      WHERE stories_id = $1
      ORDER BY votes DESC;
    `, [storyId])
    .then(data => {
      return data.rows;
    });
};
module.exports = { getSubmissions };
