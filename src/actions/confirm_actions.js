import * as UberAPIUtil from '../util/uber/quotes.js';
import * as LyftAPIUtil from '../util/lyft/quotes.js';

export const RECEIVE_SELECTED_RIDE = "RECEIVE_SELECTED_RIDE";
export const CLEAR_CONFIRM_STATE = "CLEAR_CONFIRM_STATE";


export const receiveRide = ride => {
  return {
    type: RECEIVE_SELECTED_RIDE,
    ride
  };
};

export const clearConfirmState = () => {
  return {
    type: CLEAR_CONFIRM_STATE,
  };
};

export const getUberQuote = (accessToken, product_id, startLat, startLong, endLat, endLong) => dispatch => (
  UberAPIUtil.getProductQuote(accessToken, product_id, startLat, startLong, endLat, endLong)
    .then(response => dispatch(receiveRide(response)))
);
