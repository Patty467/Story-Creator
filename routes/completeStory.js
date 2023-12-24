const express = require('express');
const router = express.Router();
const completeStory = require('../db/queries/completeStory.js');

router.post('/:id', (req, res) => {
  const storyId = req.params.id;
  completeStory.completeStory(storyId)
    .then(() => res.redirect('back'))
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;