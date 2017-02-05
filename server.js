import express from 'express';
import path from 'path';
import { PORT, UBER_CLIENT_ID, UBER_CLIENT_SECRET, LYFT_CLIENT_ID, LYFT_CLIENT_SECRET } from './config.js';
import OauthClient from 'client-oauth2';
import SimpleOauth from 'simple-oauth2';
import qs from 'query-string';

const uberAuth = new OauthClient({
  clientId: UBER_CLIENT_ID,
  clientSecret: UBER_CLIENT_SECRET,
  accessTokenUri: 'https://login.uber.com/oauth/v2/token',
  authorizationUri: 'https://login.uber.com/oauth/v2/authorize',
  redirectUri: 'http://localhost:3000/uberCallback',
  scopes: ['request']
});

const lyftAuth = SimpleOauth.create({
  client: {
    id: LYFT_CLIENT_ID,
    secret: LYFT_CLIENT_SECRET
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

app.get('/uber', (req, res) => {
  let uri = uberAuth.code.getUri();
  res.redirect(uri);
});

app.get('/uberCallback', (req, res) => {
  let uberUserInfo;

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

app.get('/lyft', (req, res) => {
  const authorizationUri = lyftAuth.authorizationCode.authorizeURL({
    redirect_uri: 'http://localhost:3000/lyftCallback',
    scope: 'rides.request',
    state: 'randomstuff'
  });
  res.redirect(authorizationUri);
});

app.get('/lyftCallback', (req, res) => {
  let lyftUserInfo;

  const tokenConfig = {
    code: req.query.code,
    redirect_uri: 'http://localhost:3000/lyftCallback'
  };

  lyftAuth.authorizationCode.getToken(tokenConfig)
    .then((result) => {
      const token = lyftAuth.accessToken.create(result).token;

      lyftUserInfo = qs.stringify({
        access_token: token.access_token,
        token_type: token.token_type,
        scope: token.scope,
        expires_in: token.expires_in,
        expires: token.expires_at
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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
