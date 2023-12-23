-- Create the users table
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users(
  id serial PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL
);

-- Create the stories table with a foreign key reference to the users table
DROP TABLE IF EXISTS stories CASCADE;

CREATE TABLE stories(
  id serial PRIMARY KEY NOT NULL,
  title varchar(255) NOT NULL,
  content text,
  completed boolean NOT NULL DEFAULT FALSE,
  users_id int REFERENCES users(id)
);

-- Create the submissions table with foreign key references to users and stories
DROP TABLE IF EXISTS submissions CASCADE;

CREATE TABLE submissions(
  id serial PRIMARY KEY NOT NULL,
  content text,
  votes integer, DEFAULT 0
  active boolean NOT NULL DEFAULT TRUE,
  accepted boolean NOT NULL DEFAULT FALSE,
  users_id integer REFERENCES users(id),
  stories_id integer REFERENCES stories(id)
);
