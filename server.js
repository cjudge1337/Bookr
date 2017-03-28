import express from 'express';
import path from 'path';
import OauthClient from 'client-oauth2';
import SimpleOauth from 'simple-oauth2';
import qs from 'query-string';
import { PORT, REDIRECT_URI, UBER_CLIENT_ID, UBER_CLIENT_SECRET, LYFT_CLIENT_ID,
  LYFT_CLIENT_SECRET } from './config.js';

const app = express();

const uberAuth = new OauthClient({
  clientId: UBER_CLIENT_ID,
  clientSecret: UBER_CLIENT_SECRET,
  accessTokenUri: 'https://login.uber.com/oauth/v2/token',
  authorizationUri: 'https://login.uber.com/oauth/v2/authorize',
  redirectUri: `http://localhost:${PORT}/uberCallback`,
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

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', REDIRECT_URI);
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
        url: REDIRECT_URI
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
    .catch((err) => {
      console.log(err);
      return res.redirect('/#/');
    });
});

app.get('/lyft', (req, res) => {
  const authorizationUri = lyftAuth.authorizationCode.authorizeURL({
    redirect_uri: `http://localhost:${PORT}/lyftCallback`,
    scope: 'rides.request public rides.read',
    state: 'randomstuff'
  });
  res.redirect(authorizationUri);
});

app.get('/lyftCallback', (req, res) => {
  let lyftUserInfo;

  const tokenConfig = {
    code: req.query.code,
    redirect_uri: `http://localhost:${PORT}/lyftCallback`
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
    .catch((err) => {
      console.log(err);
      return res.redirect('/#/');
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
