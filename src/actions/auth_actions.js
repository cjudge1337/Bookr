export const RECEIVE_UBER_CREDS = 'RECEIVE_UBER_CREDS';
export const RECEIVE_LYFT_CREDS = 'RECEIVE_LYFT_CREDS';

export const receiveUberCreds = (uberCreds) => ({
  type: RECEIVE_UBER_CREDS,
  uberCreds
});

export const receiveLyftCreds = (lyftCreds) => ({
  type: RECEIVE_LYFT_CREDS,
  lyftCreds
});
//
// export const requestUberToken = (code) => (dispatch) => (
//   AuthAPIUtil.requestUberToken(code)
//     .then(payload => console.log(payload))
// );
// export const requestLyftToken = (code) => (dispatch) => (
//   AuthAPIUtil.requestLyftToken(code)
//     .fail(payload => console.log(payload))
// );
