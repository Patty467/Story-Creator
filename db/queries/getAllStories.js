const db = require('../connection');

//get all stories
const getAllStories = () => {
  return db.query(`
  SELECT stories.*, users.name, users.id AS userID
  FROM stories
  JOIN users ON stories.users_id = users.id
  ORDER BY stories.id DESC;
  `)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getAllStories };
