const express = require('express');
const router = express.Router();
const createStory = require('../db/queries/createStory.js');

router.post('/', (req, res) => {
  const { story_title, field } = req.body;
  createStory.createStory(story_title, field)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;