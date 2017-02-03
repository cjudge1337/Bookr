import express from 'express';
import path from 'path';
import { PORT } from './config';
import { UBER_SERVER_TOKEN, UBER_CLIENT_ID, UBER_CLIENT_SECRET, REDIRECT_URI } from './config.js';
import OauthClient from 'client-oauth2';
import SimpleOauth from 'simple-oauth2';
import qs from 'query-string';

let state;

const uberAuth = new OauthClient({
  clientId: 'iUm_rhTOLnZLnwq4LyzQLq1pI2Bd0a3Q',
  clientSecret: 'vA7uZtzuIgfnvwLHlDPQsp3utkd564B45XlwcgZU',
  accessTokenUri: 'https://login.uber.com/oauth/v2/token',
  authorizationUri: 'https://login.uber.com/oauth/v2/authorize',
  redirectUri: 'http://localhost:3000/uberCallback',
  scopes: ['profile']
});

const lyftAuth = SimpleOauth.create({
  client: {
    id: '2gu3pDBvbRnH',
    secret: 'M2fCNYbYNMBDCAp-LqLJ7BaZE3_5aZsy'
  },
  auth: {
    tokenHost: 'https://api.lyft.com'
  }
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
  let uberUserInfo;
  console.log(req.originalUrl);
  uberAuth.code.getToken(req.originalUrl)
    .then(user => {
      user.refresh();

      user.sign({
        method: 'get',
        url: 'http://localhost:3000'
      });

      uberUserInfo = qs.stringify({
        access_token: user.data.access_token,
        refresh_token: user.data.refresh_token,
        token_type: user.data.token_type,
        scope: user.data.scope,
        expires_in: user.data.expires_in,
        expires: user.expires
      });
      return;
    })
    .then(() => {
      return res.redirect('/#/uberAuth/' + uberUserInfo);
    })
    .catch(() => {
      return res.redirect('/#/');
    });
});

app.get('/lyftCallback', (req, res) => {
  let lyftUserInfo;

  const tokenConfig = {
    code: req.query.code,
    redirect_uri: 'http://localhost:3000/lyftCallback'
  };

  lyftAuth.authorizationCode.getToken(tokenConfig)
    .then((result) => {
      const token = lyftAuth.accessToken.create(result);

      lyftUserInfo = qs.stringify({
        access_token: token.token.access_token
      });
      return;
    })
    .then(() => {
      return res.redirect('/#/lyftAuth/' + lyftUserInfo);
    })
    .catch(() => {
      return res.redirect('/#/');
    });
});

app.get('/lyft', (req, res) => {
  const authorizationUri = lyftAuth.authorizationCode.authorizeURL({
    redirect_uri: 'http://localhost:3000/lyftCallback',
    scope: 'profile',
    state: 'randomstuff'
  });
  console.log(authorizationUri);
  res.redirect(authorizationUri);
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
