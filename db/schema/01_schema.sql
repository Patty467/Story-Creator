DROP TABLE IF EXISTS "users" CASCADE;
CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "name" VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS "stories" CASCADE;
CREATE TABLE "stories" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "title" VARCHAR(255) NOT NULL,
  "content" TEXT,
  "completed" BOOLEAN NOT NULL DEFAULT TRUE,
  "users_id" INTEGER
);

DROP TABLE IF EXISTS "submissions" CASCADE;
CREATE TABLE "submissions" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "content" TEXT,
  "votes" INTEGER,
  "active" BOOLEAN NOT NULL DEFAULT TRUE,
  "accepted" BOOLEAN NOT NULL DEFAULT TRUE,
  "users_id" INTEGER,
  "stories_id" INTEGER
);