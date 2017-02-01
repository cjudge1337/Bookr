import { UBER_SERVER_TOKEN, UBER_CLIENT_ID, UBER_CLIENT_SECRET } from '../../../config.js';
import $ from "jQuery";

export const authorize = () => (
  $.ajax({
    url: 'https://login.uber.com/oauth/v2/authorize',
    method: "GET",
    data: {
      client_id: UBER_CLIENT_ID,
      response_type: 'code',
      redirect_uri: "/Users/Vinit/Documents/Bookr/index.html"
    }
  })
);

export const login = (authCode) => (
  $.ajax({
    url: "https://login.uber.com/v2/token",
    method: "POST",
    data: {
      client_id: UBER_CLIENT_ID,
      client_secret: UBER_CLIENT_SECRET,
      grant_type: 'authorization_code',
      redirect_uri: '/',
      code: authCode,
      scope: 'profile history'
    }
  })
);
