const express = require('express');
const router = express.Router();
const getAllStories = require("../db/queries/getAllStories.js");

router.get('/', (req, res) => {
  const username = req.session.user ? req.session.user.name : '';
  getAllStories.getAllStories()
    .then((stories) => res.render('myStories', { stories, username }));
});

module.exports = router;
