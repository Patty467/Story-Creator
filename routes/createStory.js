const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const username = req.session.user ? req.session.user.name : '';


  res.render('createStory', { username });
});

module.exports = router;
