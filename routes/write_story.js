//all this is loaded on /write-story

const fs = require('fs');

const express = require('express');
const router = express.Router();

// router.get('/', (req, res) => {
//   res.render('write_story');
// });

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);

  fs.readFile('./db/place-holders/stories.json', 'utf8', (err, data) => {
    const stories = JSON.parse(data);
    const story = stories.find(story => story.id === id);

    if (!story) {
      return res.status(404).send('Story not found.');
    }

    res.render('write_story', { story });
  });
});



module.exports = router;
