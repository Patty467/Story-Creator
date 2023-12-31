// testing
const fs = require('fs');
// testing

// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

// express-session middleware
app.use(session({
  secret: 'your secret key',
  resave: false,
  saveUninitialized: true,
}));

app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource
const contribution = require('./routes/contributions.js');
const createStoryAPI = require('./routes/createStory-api.js');
const createStory = require('./routes/createStory.js');
const getStories = require('./routes/getStories-api.js');
const myStories = require('./routes/myStories.js');
const submissions = require('./routes/submissions-api.js');
const createVote = require('./routes/createVote-api.js');
const login = require('./routes/login.js');
const acceptSubmission = require('./routes/acceptSubmission.js');
const completeStory = require('./routes/completeStory.js');
const downVote = require('./routes/downVote-api.js');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`

app.use('/contribution', contribution);
app.use('/api/createStories', createStoryAPI);
app.use('/createStory', createStory);
app.use('/api/getStories', getStories);
app.use('/myStories', myStories);
app.use('/api/submissions', submissions);
app.use('/api/createVote', createVote);
app.use('/login', login);
app.use('/api/acceptSubmission', acceptSubmission);
app.use('/api/completeStory', completeStory);
app.use('/api/downVote', downVote);

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
const getAllStories = require("./db/queries/getAllStories.js");

app.get('/', (req, res) => {
  const username = req.session.user ? req.session.user.name : '';
  console.log(username)
  getAllStories
    .getAllStories()
    .then((stories) => res.render('index', { stories, username }));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
