<<<<<<< HEAD
const express = require('express');
const server = express();

const PORT = 8000;

server.listen(PORT, () => {
  console.log('express Server Listening Man, On:', PORT);
});
=======
import express from 'express'
import { resolve } from 'path'
import fallback from 'express-history-api-fallback';
import AuthRoutes from './routes/auth';

import { config } from '../config'
import APIRoutes from './routes/api'
import database from './database/db'

export const SESSION_COOKIE = 'reddit_session'

const root = resolve(process.cwd(), config.get('STATIC_PATH'));
const app = express();

const authRouter = express.Router({
  mergeParams: true
})
const apiRouter = express.Router({
  mergeParams: true
})

app.use('/auth',AuthRoutes(authRouter));
app.use('/api', APIRoutes(apiRouter));

app.use(express.static(root));
app.use(fallback('index.html', { root }));

module.exports = app;
>>>>>>> postgres
