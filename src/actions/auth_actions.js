import * as AuthAPIUtil from '../util/auth_api';

export const RECEIVE_UBER_TOKEN = 'RECEIVE_UBER_TOKEN';
export const RECEIVE_LYFT_TOKEN = 'RECEIVE_LYFT_TOKEN';

export const receiveUberToken = (uberPayload) => ({
  type: RECEIVE_UBER_TOKEN,
  uberPayload
});

export const receiveLyftToken = (lyftPayload) => ({
  type: RECEIVE_LYFT_TOKEN,
  lyftPayload
});

export const requestUberToken = (code) => (dispatch) => (
  AuthAPIUtil.requestUberToken(code)
    .then(payload => console.log(payload))
);
export const requestLyftToken = (code) => (dispatch) => (
  AuthAPIUtil.requestLyftToken(code)
    .fail(payload => console.log(payload))
);
