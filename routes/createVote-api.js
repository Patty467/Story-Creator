const express = require('express');
const router = express.Router();
const createVote = require('../db/queries/createVote.js');

router.post('/:id', (req, res) => {
  const submissionId = req.params.id;
  createVote.upVote(submissionId)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;
