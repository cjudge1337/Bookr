import * as UberAPIUtil from '../util/uber/quotes.js';
import * as LyftAPIUtil from '../util/lyft/quotes.js';
import * as GoogleAPIUtil from '../util/google_maps/location_api.js';

export const ADD_UBER_QUOTES = "ADD_UBER_QUOTES";
export const ADD_LYFT_QUOTES = "ADD_LYFT_QUOTES";
export const ADD_LYFT_ETAS = "ADD_LYFT_ETAS";
export const ADD_UBER_ETAS = "ADD_UBER_ETAS";
export const UPDATE_CURRENT_ADDRESS = "UPDATE_CURRENT_ADDRESS";
export const UPDATE_DESTINATION_ADDRESS = "UPDATE_DESTINATION_ADDRESS";
export const UPDATE_CURRENT_GEOLOCATION = "UPDATE_CURRENT_GEOLOCATION";
export const UPDATE_DESTINATION_GEOLOCATION = "UPDATE_DESTINATION_GEOLOCATION";

export const updateCurrentGeolocation = location => ({
  type: UPDATE_CURRENT_GEOLOCATION,
  location: location.results[0].geometry.location
});

export const getCurrentGeolocation = address => dispatch => (
  GoogleAPIUtil.addressToGeo(address)
    .then(response => dispatch(updateCurrentGeolocation(response)))
);

export const updateDestinationGeolocation = location => ({
  type: UPDATE_DESTINATION_GEOLOCATION,
  location: location.results[0].geometry.location
});

export const getDestinationGeolocation = address => dispatch => (
  GoogleAPIUtil.addressToGeo(address)
    .then(response => dispatch(updateDestinationGeolocation(response)))
);

export const updateCurrentAddress = address => ({
  type: UPDATE_CURRENT_ADDRESS,
  address
});

export const updateDestinationAddress = address => ({
  type: UPDATE_DESTINATION_ADDRESS,
  address
});

export const addUberQuotes = quotesObj => {
  return {
    type: ADD_UBER_QUOTES,
    prices: quotesObj.prices
  };
};

export const getUberQuotes = (startLat, startLong, endLat, endLong) => dispatch => (
  UberAPIUtil.getAllProductQuotes(startLat, startLong, endLat, endLong)
    .then(response => dispatch(addUberQuotes(response)))
);

export const addLyftQuotes = quotesObj => {
  return {
    type: ADD_LYFT_QUOTES,
    prices: quotesObj.cost_estimates
  };
};

export const getLyftQuotes = (startLat, startLong, endLat, endLong) => dispatch => (
  LyftAPIUtil.getAllProductQuotes(startLat, startLong, endLat, endLong)
    .then(response => dispatch(addLyftQuotes(response)))
);

export const addUberETAs = timesObj => {
  return {
    type: ADD_UBER_ETAS,
    times: timesObj.times
  };
};

export const getUberETAs = (Lat, Long) => dispatch => (
  UberAPIUtil.getAllProductTimes(Lat, Long)
    .then(response => dispatch(addUberETAs(response)))
);

export const addLyftETAs = timesObj => {
  return {
    type: ADD_LYFT_ETAS,
    times: timesObj.eta_estimates
  };
};

export const getLyftETAs = (Lat, Long) => dispatch => (
  LyftAPIUtil.getEta(Lat, Long)
    .then(response => dispatch(addLyftETAs(response)))
);
