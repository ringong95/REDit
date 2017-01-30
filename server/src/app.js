const express = require('express');
const resolve = require('path').resolve;
const bodyParser = require('body-parser');
const cors = require('cors');

const fs = require('fs');

const json = require('./mock-data.json');

const server = express();
const PORT = 3001;

server.listen(PORT, () => {
  console.log('express Server Listening Man, On:', PORT);
});

server.use(cors());
server.use(bodyParser.json());

server.get('/posts', (req, res) => {
  res.json(json.posts);
});

server.post('/posts', (req, res) => {
  console.log(req.body)
  const newPost = req.body
  const newData = json
  newData.posts.push(newPost)
  fs.writeFile('./mock-data.json', JSON.stringify(newData), { encoding: 'utf-8' }, (err) => {
    if (err) return res.status(500).json({ error: err })
    return res.status(200)
  })
   res.send(req.body)
});

server.get('/categories', (req, res) => {
  console.log(json);
  const responseJson = json.weeks.reduce((startArray, week) => {
    return startArray.concat(week.categories);
  }, [])
    .filter((category, index, categories) => categories.indexOf(category) === index)
  res.json(responseJson);
});
server.get('/weeks', (req, res) => {
  console.log(json);
  const responseJson = json.weeks
  res.json(responseJson);
});
