import {UPDATE_CURRENT_GEOLOCATION, UPDATE_DESTINATION_GEOLOCATION, UPDATE_CURRENT_ADDRESS, UPDATE_DESTINATION_ADDRESS, ADD_UBER_QUOTES, ADD_LYFT_QUOTES, ADD_UBER_ETAS, ADD_LYFT_ETAS} from '../actions/quote_actions';
import {merge} from 'lodash';

const _noProducts = {
  errors: {},
  prices: {},
  times: {},
  adresses: {},
  geolocations: {},
};

const QuoteReducer = (state = _noProducts, action) => {
  Object.freeze(state);
  switch (action.type) {
    case ADD_UBER_QUOTES:
      const newUberProducts = merge({}, state.prices, action.quotesObj);
      return merge({}, state, {prices: {uber: newUberProducts}});
    case ADD_LYFT_QUOTES:
      const newLyftProducts = merge({}, state.prices, action.quotesObj);
      return merge({}, state, {prices: {lyft: newLyftProducts}});
    case ADD_UBER_ETAS:
      const newUberTimes = merge({}, state.times, action.timesObj);
      return merge({}, state, {times: {uber: newUberTimes}});
    case ADD_LYFT_ETAS:
      const newLyftTimes = merge({}, state.times, action.timesObj);
      return merge({}, state, {times: {lyft: newLyftTimes}});
    case UPDATE_CURRENT_ADDRESS:
      const newCurrentAdresses = merge({}, state.address, {current: action.address});
      return merge({}, state, {address: newCurrentAdresses});
    case UPDATE_DESTINATION_ADDRESS:
      const newDestinationAdresses = merge({}, state.address, {destination: action.address})
      return merge({}, state, {address: newDestinationAdresses});
    case UPDATE_CURRENT_GEOLOCATION:
      const newCurrentGeolocation = merge({}, state.geolocations, {current: action.location});
      return merge({}, state, {address: newCurrentGeolocation});
    case UPDATE_DESTINATION_GEOLOCATION:
      const newDestinationGeolocation = merge({}, state.geolocations, {destination: action.location});
      return merge({}, state, {address: newDestinationGeolocation});
    default:
      return state;
  }
};

export default QuoteReducer;
