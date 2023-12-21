const express = require('express');
const router  = express.Router();
const storyQueries = require('../db/queries/storyInformation');

router.get('/:id', (req, res) => {
  storyQueries.getStoryInformation(id)
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