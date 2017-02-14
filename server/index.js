const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const server = express();

const PORT = 8000;

server.use(cors());
server.use(bodyParser.json());

<<<<<<< HEAD
server.listen(PORT, () => {
  console.log('express Server Listening Man, On:', PORT);
});
=======
const PORT = 8000
require('./src/app.js').listen(PORT, () => {
  console.log(`Express server is running on port: ${PORT}!`);
});
>>>>>>> postgres
