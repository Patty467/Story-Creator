const express = require('express');
const router = express.Router();
const createSubmission = require('../db/queries/createSubmission.js');
const getSubmissions = require('../db/queries/getSubmission.js');

// this creates a submission
router.post('/', (req, res) => {
  const submissionContent = req.body.field;
  const storyId = req.body.storyId;
  createSubmission.createSubmission(submissionContent, storyId)
    .then(() => {
      // console.log(submissionContent, storyId);
      res.redirect('back');
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

// this loads submissions by storyId
router.get('/:story_id', (req, res) => {
  const storyId = req.params.story_id;
  getSubmissions.getSubmissions(storyId)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).json({ error: err.message }));
});



// router.get('/:submissions_id', (req, res) => {
//   const { submissionId } = req.body;
//   getSubmission.getSubmission(submissionId)
//     .then(() => res.redirect('/'))
//     .catch(err => res.status(500).json({ error: err.message }));
// });

module.exports = router;
