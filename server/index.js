const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const server = express();

const PORT = 8000;

server.use(cors());
server.use(bodyParser.json());

server.listen(PORT, () => {
  console.log('express Server Listening Man, On:', PORT);
});
