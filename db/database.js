const db = require('./connection');

//get all stories
const getAllStories = () => {
  return db.query(`
  SELECT stories.*, users.*
  FROM stories
  JOIN users ON stories.users_id = users.id;
  `)
    .then(data => {
      return data.rows;
    });
};

//get specific story
const getStory = (storyId) => {
  return db.query(`
  SELECT stories.* users.*
  FROM stories
  JOIN users ON stories.users_id = users.id
  WHERE stories.id = $1;
  `, [storyId])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getAllStories, getStory };
