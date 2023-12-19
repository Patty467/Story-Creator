const express = require('express');
const router = express.Router();

// this creates a conribution
router.post('/contribution/:id', (req, res) => {
  const newContribution = req.body;
})

// this loads a specific contribution
router.get('/contribution/:id', (req, res) => {
  res.send("this is a specific contribution")
})


module.exports = router;
