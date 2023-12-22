const db = require('../connection');

const upVote = (submissionId) => {
  return db.query(`
    UPDATE submissions SET votes = votes + 1 WHERE id = $1
  `, [submissionId])
    .then(data => {
      return data.rows;
    });
};

module.exports = { upVote };


// const createVote = (options, submissionId) => {
//   let userInput = options.vote;
//   return db.query(`
//   UPDATE submissions SET votes = ${userInput} WHERE id = $1;
//   `, [submissionId])
//     .then(data => {
//       return data.rows;
//     });
// }
