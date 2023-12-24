const express = require('express');
const router = express.Router();
const acceptSubmission = require('../db/queries/acceptSubmission.js');

router.post('/:id', (req, res) => {
  const submissionId = req.params.id;
  acceptSubmission.acceptSubmission(submissionId)
    .then(() => res.redirect('back'))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;