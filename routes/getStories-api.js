const express = require('express');
const getStories = require("../db/queries/getStories");
const router = express.Router();

// create new story form

router.get('/new', (req, res) => {
  res.send('create new story');
});


// show specific story
router.get('/:story_id', (req, res) => {
  const storyId = req.params.story_id;
  console.log("This is the storyId: ", storyId);

  getStories
    .getStories(storyId)
    .then((stories) => {
      console.log("look here", stories);
      res.render('story', { stories });
    })
    .catch((error) => {
      console.error("An error occurred:", error);
      res.status(500).send("Internal Server Error");
    });
});

module.exports = router;
