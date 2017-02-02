import express from 'express';
import jsdom from 'jsdom';
import path from 'path';
import { PORT } from './config';
import * as UberAuth from './src/util/uber/auth_api';
import { UBER_SERVER_TOKEN, UBER_CLIENT_ID, UBER_CLIENT_SECRET, REDIRECT_URI } from './config.js';
import $ from 'jquery';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "http://localhost:3000");
  res.header('Access-Control-Allow-Methods', 'DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/app', express.static(path.join(__dirname, './app')));

app.get('/auth', (req, res) => {
  // res.json(UberAuth.login(req.query.code));
  res.redirect('/#/test/' + req.query.code);
  // res.send(req.query.code);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
