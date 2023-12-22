const express = require('express');
const router = express.Router();
const createSubmission = require('../db/queries/createSubmission.js');

router.post('/', (req, res) => {
  const { submissionContent, storyId } = req.body;
  createSubmission.createSubmission(submissionContent, storyId )
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;