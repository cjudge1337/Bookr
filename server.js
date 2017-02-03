import express from 'express';
import path from 'path';
import { PORT } from './config';
import { UBER_SERVER_TOKEN, UBER_CLIENT_ID, UBER_CLIENT_SECRET, REDIRECT_URI } from './config.js';
import OauthClient from 'client-oauth2';

const lyftAuth = new OauthClient({
  clientId: '2gu3pDBvbRnH',
  clientSecret: 'M2fCNYbYNMBDCAp-LqLJ7BaZE3_5aZsy',
  accessTokenUri: 'https://api.lyft.com/oauth/token',
  authorizationUri: 'https://api.lyft.com/oauth/authorize',
  redirectUri: 'http://localhost:3000/callback',
  scopes: ['profile']
});

const uberAuth = new OauthClient({
  clientId: 'iUm_rhTOLnZLnwq4LyzQLq1pI2Bd0a3Q',
  clientSecret: 'vA7uZtzuIgfnvwLHlDPQsp3utkd564B45XlwcgZU',
  accessTokenUri: 'https://login.uber.com/oauth/v2/token',
  authorizationUri: 'https://login.uber.com/oauth/v2/authorize',
  redirectUri: 'http://localhost:3000/uberCallback',
  scopes: ['profile']
});

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "http://localhost:3000");
  res.header('Access-Control-Allow-Methods', 'DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/app', express.static(path.join(__dirname, './app')));

app.get('/uberCallback', (req, res) => {
  console.log('callback');
  let userinfo;

  uberAuth.code.getToken(req.originalUrl)
    .then(user => {
      user.refresh();

      user.sign({
        method: 'get',
        url: 'http://localhost:3000'
      });

      userinfo = user.data;
      return;
    })
    .then(() => {
      return res.redirect('/#/uberAuth/' + userinfo.access_token);
    });
});

app.get('/lyft', (req, res) => {
  let uri = lyftAuth.code.getUri();
  res.redirect(uri);
});

app.get('/uber', (req, res) => {
  let uri = uberAuth.code.getUri();
  res.redirect(uri);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
