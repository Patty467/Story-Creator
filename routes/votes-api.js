const express = require('express');
const router = express.Router();
const createVote = require('../db/queries/createVote.js');

router.post('/up/:id', (req, res) => {
  const submissionId = req.params.id;
  createVote.downVote(submissionId)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).json({ error: err.message }));
});

router.post('/down/:id', (req, res) => {
  const submissionId = req.params.id;
  createVote.upVote(submissionId)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;
