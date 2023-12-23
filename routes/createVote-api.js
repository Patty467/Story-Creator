const express = require('express');
const router = express.Router();
const createVote = require('../db/queries/createVote.js');

router.post('/:id', (req, res) => {
  console.log("asdasd", req.params);
  const submissionId = req.params.id;
  console.log("this", submissionId);
  createVote.upVote(submissionId)
    .then(() => res.redirect('back'))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;