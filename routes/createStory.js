const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const username = req.session.user ? req.session.user.name : 'Not logged in';

  res.render('createStory', { username });
});

module.exports = router;