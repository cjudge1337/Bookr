import * as UberAPIUtil from '../util/uber/quotes.js';
import * as LyftAPIUtil from '../util/lyft/quotes.js';

export const RECEIVE_SELECTED_RIDE = "RECEIVE_SELECTED_RIDE";


export const receiveRide = ride => {
  return {
    type: RECEIVE_SELECTED_RIDE,
    ride
  };
};

export const getUberQuote = (accessToken, product_id, startLat, startLong, endLat, endLong) => dispatch => (
  UberAPIUtil.getProductQuote(accessToken, product_id, startLat, startLong, endLat, endLong)
    .then(response => dispatch(receiveRide(response)))
);


// export const getLyftQuote = (product_id, startLat, startLong, endLat, endLong) => dispatch => (
//   UberAPIUtil.getProductQuote(product_id, startLat, startLong, endLat, endLong)
//     .then(response => dispatch(receiveRide(response)))
// );
