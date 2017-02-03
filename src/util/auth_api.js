import { UBER_SERVER_TOKEN, UBER_CLIENT_ID, UBER_CLIENT_SECRET, LYFT_CLIENT_ID, LYFT_CLIENT_SECRET } from '../../config.js';
import $ from 'jquery';

export const requestUberToken = (authCode) => {

  debugger
  return $.ajax({
    url: "https://login.uber.com/v2/token",
    method: "POST",

    data: {
      client_id: UBER_CLIENT_ID,
      client_secret: UBER_CLIENT_SECRET,
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:3000',
      code: authCode,
      scope: 'profile'
    }
  });
};

export const requestLyftToken = (authCode) => (
  $.ajax({
    url: "https://api.lyft.com/oauth/token",
    method: "POST",
    headers: {
      "Authorization": `Basic base64(${LYFT_CLIENT_ID}:${LYFT_CLIENT_SECRET})`,
      "Content-Type": "application/json"
    },
    data: {
      "grant_type": "authorization_code",
      "code": authCode
    }
  })
);
