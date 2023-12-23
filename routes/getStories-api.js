const express = require('express');
const getStories = require("../db/queries/getStories");
const getSubmission = require("../db/queries/getSubmission");
const router = express.Router();

// create new story form

router.get('/new', (req, res) => {
  res.send('create new story');
});

router.get('/:story_id', (req, res) => {
  const storyId = req.params.story_id;

  Promise.all([
    getStories.getStories(storyId),
    getSubmission.getSubmission(storyId)
  ])
    .then(([stories, submission]) => {
      // console.log('Stories:', stories);
      // console.log('Submission:', submission);
      res.render('story', { stories, submission });
    })
    .catch((error) => {
      console.error("An error occurred:", error);
      res.status(500).send("Internal Server Error");
    });
  });

module.exports = router;

