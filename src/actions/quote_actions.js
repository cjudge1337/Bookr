import * as UberAPIUtil from '../util/uber/quotes.js';
import * as LyftAPIUtil from '../util/lyft/quotes.js';
export const ADD_UBER_QUOTES = "ADD_QUOTES";
export const ADD_LYFT_QUOTES = "ADD_QUOTES";
export const ADD_LYFT_ETAS = "ADD_QUOTES";
export const ADD_UBER_ETAS = "ADD_QUOTES";

export const addUberQuotes = quotesObj => ({
  type: ADD_UBER_QUOTES,
  quotesObj
});

export const getUberQuotes = (startLat, startLong, endLat, endLong) => dispatch => (
  UberAPIUtil.getAllProductQuotes(startLat, startLong, endLat, endLong)
    .then(response => dispatch(addUberQuotes(response.prices)))
);

export const addLyftQuotes = quotesObj => ({
  type: ADD_LYFT_QUOTES,
  quotesObj
});

export const getLyftQuotes = (startLat, startLong, endLat, endLong) => dispatch => (
  LyftAPIUtil.getAllProductQuotes(startLat, startLong, endLat, endLong)
    .then(response => dispatch(addLyftQuotes(response.prices)))
);

export const addUberETAs = timesObj => ({
  type: ADD_UBER_ETAS,
  timesObj
});

export const getUberETAs = (Lat, Long) => dispatch => (
  UberAPIUtil.getAllProductQuotes(Lat, Long)
    .then(response => dispatch(addUberQuotes(response.prices)))
);

export const addLyftETAs = timesObj => ({
  type: ADD_LYFT_ETAS,
  timesObj
});

export const getLyftETAs = (Lat, Long) => dispatch => (
  LyftAPIUtil.getAllProductQuotes(Lat, Long)
    .then(response => dispatch(addLyftQuotes(response.prices)))
);
