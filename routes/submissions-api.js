const express = require('express');
const router = express.Router();
const createSubmission = require('../db/queries/createSubmission.js');
const getSubmissions = require('../db/queries/getSubmission.js');
const getUserFromName = require('../db/queries/getUserFromName.js');

// this creates a submission
router.post('/', async (req, res) => { // Add async keyword here
  const submissionContent = req.body.field;
  const storyId = req.body.storyId;
  const username = req.body.username; // Extract username from request body

  try {
       // Fetch the user based on the username
       const user = await getUserFromName(username);
       const user_id = user.id;
       // Pass the user_id to the createStory function
    createSubmission.createSubmission(submissionContent, storyId, user_id)
    .then(() => {
      // console.log(submissionContent, storyId);
      res.redirect('back');
    })
    .catch(err => res.status(500).json({ error: err.message }));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// this loads submissions by storyId
router.get('/:story_id', (req, res) => {
  const storyId = req.params.story_id;
  getSubmissions.getSubmissions(storyId)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;