import * as UberAPIUtil from '../util/uber/quotes.js';
import * as LyftAPIUtil from '../util/lyft/quotes.js';
import * as GoogleAPIUtil from '../util/google_maps/location_api.js';

export const ADD_UBER_QUOTES = "ADD_UBER_QUOTES";
export const ADD_LYFT_QUOTES = "ADD_LYFT_QUOTES";
export const ADD_UBER_ETAS = "ADD_UBER_ETAS";
export const ADD_LYFT_ETAS = "ADD_LYFT_ETAS";
export const ADD_UBER_ERRORS = "ADD_UBER_ERRORS";
export const ADD_LYFT_ERRORS = "ADD_LYFT_ERRORS";
export const CLEAR_PRICE_ERRORS = "CLEAR_PRICE_ERRORS";
export const UPDATE_CURRENT_ADDRESS = "UPDATE_CURRENT_ADDRESS";
export const UPDATE_DESTINATION_ADDRESS = "UPDATE_DESTINATION_ADDRESS";
export const UPDATE_CURRENT_GEOLOCATION = "UPDATE_CURRENT_GEOLOCATION";
export const UPDATE_DESTINATION_GEOLOCATION = "UPDATE_DESTINATION_GEOLOCATION";
export const BOOK_UBER_RIDE = "BOOK_UBER_RIDE";
export const BOOK_LYFT_RIDE = "BOOK_LYFT_RIDE";

// Sync actions

export const bookUberRide = rideData => ({
  type: BOOK_UBER_RIDE,
  rideData
});

export const bookLyftRide = rideData => ({
  type: BOOK_LYFT_RIDE,
  rideData
});

export const clearPricesErrors = () => ({
  type: CLEAR_PRICE_ERRORS,
});

export const updateCurrentGeolocation = location => ({
  type: UPDATE_CURRENT_GEOLOCATION,
  location: location.results[0].geometry.location
});

export const updateDestinationGeolocation = location => ({
  type: UPDATE_DESTINATION_GEOLOCATION,
  location: location.results[0].geometry.location
});

export const updateCurrentAddress = address => ({
  type: UPDATE_CURRENT_ADDRESS,
  address
});

export const updateDestinationAddress = address => ({
  type: UPDATE_DESTINATION_ADDRESS,
  address
});

export const addUberQuotes = quotesObj => ({
  type: ADD_UBER_QUOTES,
  prices: quotesObj.prices
});

export const addUberErrors = error => ({
  type: ADD_UBER_ERRORS,
  error: error.responseJSON.message
});

export const addLyftQuotes = quotesObj => {
  if (quotesObj.cost_estimates.length > 0) {
    return {
      type: ADD_LYFT_QUOTES,
      prices: quotesObj.cost_estimates
    };
  } else {
    return {
      type: ADD_LYFT_ERRORS,
      error: "Lyft is not yet available in this region."
    };
  }
};

export const addUberETAs = timesObj => ({
  type: ADD_UBER_ETAS,
  times: timesObj.times
});

export const addLyftETAs = timesObj => ({
  type: ADD_LYFT_ETAS,
  times: timesObj.eta_estimates
});

// Async actions

export const getUberQuotes = (startLat, startLong, endLat, endLong) => dispatch => (
  UberAPIUtil.getAllProductQuotes(startLat, startLong, endLat, endLong)
  .then(response => dispatch(addUberQuotes(response)),
      error => dispatch(addUberErrors(error)))
);

export const getLyftQuotes = (startLat, startLong, endLat, endLong) => dispatch => (
  LyftAPIUtil.getAllProductQuotes(startLat, startLong, endLat, endLong)
  .then(response => dispatch(addLyftQuotes(response)))
);

export const getUberETAs = (Lat, Long) => dispatch => (
  UberAPIUtil.getAllProductTimes(Lat, Long)
  .then(response => dispatch(addUberETAs(response)))
);

export const getLyftETAs = (Lat, Long) => dispatch => (
  LyftAPIUtil.getEta(Lat, Long)
  .then(response => dispatch(addLyftETAs(response)))
);

export const getDestinationGeolocation = address => dispatch => (
  GoogleAPIUtil.addressToGeo(address)
    .then(response => dispatch(updateDestinationGeolocation(response)))
);

export const getCurrentGeolocation = address => dispatch => (
  GoogleAPIUtil.addressToGeo(address)
    .then(response => dispatch(updateCurrentGeolocation(response)))
);
