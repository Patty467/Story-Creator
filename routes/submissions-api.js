const express = require('express');
const router = express.Router();
const createSubmission = require('../db/queries/createSubmission.js');
const getSubmission = require('../db/queries/getSubmission.js');

// localhost:8080/submissions/
// this creates a submission
router.post('/', (req, res) => {
  const { submissionContent, storyId } = req.body;
  createSubmission.createSubmission(submissionContent, storyId)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).json({ error: err.message }));
});

// this loads a specific submission
// localhost:8080/submissions/:id
router.get('/:submissions_id', (req, res) => {
  const { submissionId } = req.body;
  getSubmission.getSubmission(submissionId)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).json({ error: err.message }));
});


module.exports = router;
