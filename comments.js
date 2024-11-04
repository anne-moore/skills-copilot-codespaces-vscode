// Create web server
// Create a web server that listens on port 3000 and serves the following routes:
// GET /comments - responds with a list of comments
// POST /comments - adds a new comment
// GET /comments/:id - responds with a single comment with the id provided in the URL
// PUT /comments/:id - updates the comment with the id provided in the URL
// DELETE /comments/:id - deletes the comment with the id provided in the URL

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const comments = [
    { id: 1, author: 'John', text: 'Hello World' },
    { id: 2, author: 'Doe', text: 'Hi, planet!' },
    { id: 3, author: 'Foo', text: 'Hello' }
]