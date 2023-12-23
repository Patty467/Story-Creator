const db = require('../connection');

const checkUser = (username) => {
  // Log the username
  return db.query('SELECT * FROM users WHERE name = $1', [username])
    .then(data => {
      return data.rows[0].name;
    });
};

module.exports = { checkUser };