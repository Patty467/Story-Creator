const express = require('express');
const database = require("../db/database");
const router = express.Router();

// create new story form
router.get('/new', (req, res) => {
  res.send('create new story');
});


// show specific story
router.get('/:story_id', (req, res) => {
  database
    .getStory(req.params.story_id)
    .then((story) => res.render('story', { story }));
});

module.exports = router;
