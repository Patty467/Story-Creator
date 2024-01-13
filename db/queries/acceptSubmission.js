const db = require('../connection');

const acceptSubmission = async (submissionId) => {
  try {
    const result = await db.query(`SELECT stories_id FROM submissions WHERE id = $1`, [submissionId]);
    const stories_Id = result.rows[0].stories_id;
    
    await db.query(`UPDATE submissions SET accepted = true WHERE id = $1`, [submissionId]);
    await db.query(`UPDATE submissions SET active = false WHERE stories_id = $1 AND id != $2`, [stories_Id, submissionId]);
  } catch (err) {
    throw err;
  }
};

module.exports = { acceptSubmission };