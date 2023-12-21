const express = require('express');
const router  = express.Router();
const storyQueries = require('../db/queries/myStories');

router.get('/:id', (req, res) => {
  storyQueries.getMyStories(id)
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