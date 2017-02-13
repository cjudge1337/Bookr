import { merge } from 'lodash';
import { CLEAR_PRICE_ERRORS, ADD_LYFT_ERRORS, ADD_UBER_ERRORS,
  UPDATE_CURRENT_GEOLOCATION, UPDATE_DESTINATION_GEOLOCATION, UPDATE_CURRENT_ADDRESS,
  UPDATE_DESTINATION_ADDRESS, ADD_UBER_QUOTES, ADD_LYFT_QUOTES,
  ADD_UBER_ETAS, ADD_LYFT_ETAS, BOOK_UBER_RIDE, BOOK_LYFT_RIDE } from '../actions/quote_actions';

import {CLEAR_CONFIRM_STATE} from '../actions/confirm_actions';

const _noProducts = {
  errors: {},
  prices: {},
  times: {},
  address: {current: "", destination: ""},
  geolocations: {current: "", destination: ""},
  booked_ride: {}
};

const QuoteReducer = (state = _noProducts, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CLEAR_CONFIRM_STATE:
      return merge({}, {errors: {}, prices: state.prices, times: state.times,
        address: state.address, geolocations: state.geolocations, booked_ride: {}});
    case BOOK_UBER_RIDE:
      return merge({}, state, {booked_ride: {uber: action.rideData}});
    case BOOK_LYFT_RIDE:
      return merge({}, state, {booked_ride: {lyft: action.rideData}});
    case CLEAR_PRICE_ERRORS:
      return merge({}, _noProducts,
        {address: state.address, geolocations: state.geolocations});
    case ADD_UBER_QUOTES:
      return merge({}, state, {errors: {}, prices: {uber:
        action.prices.sort((a, b) => a.high_estimate - b.high_estimate)}});
    case ADD_LYFT_QUOTES:
      return merge({}, state, {errors: {}, prices: {lyft:
        action.prices.sort((a, b) => a.estimated_cost_cents_max -
        b.estimated_cost_cents_max)}});
    case ADD_UBER_ETAS:
      return merge({}, state, {times: {uber: action.times}});
    case ADD_LYFT_ETAS:
      return merge({}, state, {times: {lyft: action.times}});
    case ADD_UBER_ERRORS:
      return merge({}, state, {errors: {uber:
        "Uber Error: " + action.error}, prices: {}});
    case ADD_LYFT_ERRORS:
      return merge({}, state, {errors: {lyft:
        "Lyft Error: " + action.error}, prices: {}});
    case UPDATE_CURRENT_ADDRESS:
      const newCurrentAdresses = merge({}, state.address,
        {current: action.address});
      return merge({}, state, {address: newCurrentAdresses});
    case UPDATE_DESTINATION_ADDRESS:
      const newDestinationAdresses = merge({}, state.address,
        {destination: action.address});
      return merge({}, state, {address: newDestinationAdresses});
    case UPDATE_CURRENT_GEOLOCATION:
      const newCurrentGeolocation = merge({}, state.geolocations,
        {current: action.location});
      return merge({}, state, {geolocations: newCurrentGeolocation});
    case UPDATE_DESTINATION_GEOLOCATION:
      const newDestinationGeolocation = merge({}, state.geolocations,
        {destination: action.location});
      return merge({}, state, {geolocations: newDestinationGeolocation});
    default:
      return state;
  }
};

export default QuoteReducer;
