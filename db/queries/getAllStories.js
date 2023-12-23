const db = require('../connection');

//get all stories
const getAllStories = () => {
  return db.query(`
  SELECT stories.*, users.name
  FROM stories
  JOIN users ON stories.users_id = users.id;
  `)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getAllStories };
