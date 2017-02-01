import * as UberAPIUtil from '../util/uber/quotes.js';
import * as LyftAPIUtil from '../util/lyft/quotes.js';
export const RECEIVE_DATASETS = "RECEIVE_DATASETS";

// export const addQuotes = quotesObj => ({
//   type: CHANGE_VIEW,
//   datasetId
// });

export const getUberQuotes = (startLat, startLong, endLat, endLong) => dispatch => (
  UberAPIUtil.getAllProductQuotes(startLat, startLong, endLat, endLong)
    .then(response => console.log(response))
);


// dispatch(addQuotes(response)
