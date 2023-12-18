const express = require('express');
const router  = express.Router();

// this creates a submission
router.post('/submission/:id', (req, res) => {
  const newSubmission = req.body;
})

// this loads a specific submission
router.get('/submission/:id', (req, res) => {
  res.send("this is a specific submission")
})


module.exports = router;