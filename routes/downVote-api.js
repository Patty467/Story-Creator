const express = require('express');
const router = express.Router();
const { downVote } = require('../db/queries/downVote.js');

router.post('/:id', (req, res) => {
  const submissionId = req.params.id;
  downVote(submissionId)
    .then((data) => res.status(200).send({ data }))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;
