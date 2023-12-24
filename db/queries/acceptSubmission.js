const db = require('../connection');

const acceptSubmission = async (submissionId) => {
  try {
    await db.query(`UPDATE submissions SET accepted = true WHERE id = $1`, [submissionId]);
    await db.query(`UPDATE submissions SET active = false WHERE id != $1`, [submissionId]);
  } catch (err) {
    throw err;
  }
};

module.exports = { acceptSubmission };