const express = require('express');
const login = require('../db/queries/login.js');
const router = express.Router();

router.post('/', (req, res) => {
  // Get the username from the request body
  const username = req.body.username;
  // Call a function from the login module that checks if the username exists
  login.checkUser(username)
    .then(result => {
      if (result === username) {
        req.session.user = { name: username };
        res.redirect('/');
      } else {
        // If the username doesn't exist, send an error message
        res.send('Username does not exist');
      }
    })
    .catch(error => {
      console.error(error);
      res.send('An error occurred');
    });
});

module.exports = router;
