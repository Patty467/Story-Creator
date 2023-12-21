const express = require('express');
const router  = express.Router();
const storyQueries = require('../db/queries/allStoriesWithUsers');

router.get('/', (req, res) => {
  storyQueries.getAllStoriesWithUsers()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
