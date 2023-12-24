const express = require('express');
const router = express.Router();
const createStory = require('../db/queries/createStory.js');
const getUserFromName = require('../db/queries/getUserFromName.js');

router.post('/', async (req, res) => {
  const { story_title, field, username } = req.body;

  try {
    // Fetch the user based on the username
    const user = await getUserFromName(username);
    const user_id = user.id;
    // Pass the user_id to the createStory function
    
    await createStory.createStory(story_title, field, user_id);
    res.redirect('/');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;