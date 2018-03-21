/* jshint esversion: 6 */
/* jscs:disable maximumLineLength */

const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const database = require('./database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port);

const capitalize = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// todo: functions to return number of students of a class, which dates a student/teacher has depending on classes

let res;

app.get('/users', function (req, res) {
  res.json(database.users);
});

app.get('/teacher', function (req, res) {
  res.json(teacher);
});

app.post('/login', function (req, res) {
  let username = req.body.username;

  database.users.forEach(element => {
    if (element.username === username)
    res.json({
      username: element.username,
      role: element.role
    })
  });

  res.json('login failed');
});

// todo add classes endpoint

console.log(`App listening on port ${port}`);
