//all this is loaded on /stories

const express = require('express');
const router  = express.Router();

// this would load all the stories?
router.get('/', (req, res) => {
  res.send("This page will load all the stories in DB")
  // const query = `SELECT * FROM stories`;
  
  // res.render('my-stories')
});

// this loads a specific story
router.get('/story/:id', (req, res) => {
  res.send("this is a specific story")
});

// what does this do?
router.post('/story/:id', (req, res) => {
  const newStory = req.body;
})


router.get('/create', (req, res) => {
  // res.send("this will load when you want to create a new story")
  res.render('create-story');
});

module.exports = router;