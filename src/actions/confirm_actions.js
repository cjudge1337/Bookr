import * as UberAPIUtil from '../util/uber/quotes.js';
import * as LyftAPIUtil from '../util/lyft/quotes.js';

export const RECEIVE_SELECTED_RIDE = "RECEIVE_SELECTED_RIDE";
export const CLEAR_CONFIRM_STATE = "CLEAR_CONFIRM_STATE";

// Sync actions

export const receiveRide = ride => ({
  type: RECEIVE_SELECTED_RIDE,
  ride
});

export const clearConfirmState = () => ({
  type: CLEAR_CONFIRM_STATE,
});

// Async actions

export const getUberQuote = (accessToken, productId, startLat,
  startLong, endLat, endLong) => dispatch => (
    UberAPIUtil.getProductQuote(accessToken, productId, startLat,
      startLong, endLat, endLong)
  .then(response => dispatch(receiveRide(response)))
);
