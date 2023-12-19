//all this is loaded on /stories

const express = require('express');
const router = express.Router();

// this loads a specific story
router.get('/story/:id', (req, res) => {
  res.send("this is a specific story")
});

// what does this do?
router.post('/story/:id', (req, res) => {
  const newStory = req.body;
})

// res.send("this will load when you want to create a new story")
router.get('/create', (req, res) => {
  res.render('create-story');
});

router.get('/my-stories', (req, res) => {
  res.render('my-stories');
});

router.get('/completed-story', (req, res) => {
  // res.send("Complete")
  res.render('completed-story');
});

module.exports = router;
