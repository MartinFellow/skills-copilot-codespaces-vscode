// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Set up body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up port
app.listen(3000, function() {
  console.log('Server is running on port 3000');
});

// Get all comments
app.get('/comments', function(req, res) {
  fs.readFile(__dirname + '/comments.json', 'utf8', function(err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

// Get comment by ID
app.get('/comments/:id', function(req, res) {
  fs.readFile(__dirname + '/comments.json', 'utf8', function(err, data) {
    if (err) {
      console.log(err);
    } else {
      var comments = JSON.parse(data);
      var comment = comments.comments.find(function(comment) {
        return comment.id === parseInt(req.params.id);
      });
      res.send(comment);
    }
  });
});

// Post a new comment
app.post('/comments', function(req, res) {
  fs.readFile(__dirname + '/comments.json', 'utf8', function(err, data) {
    if (err) {
      console.log(err);
    } else {
      var comments = JSON.parse(data);
      var newComment = {
        id: comments.comments.length + 1
      }}})})