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
