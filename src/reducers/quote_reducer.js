import {ADD_UBER_QUOTES, ADD_LYFT_QUOTES, ADD_UBER_ETAS, ADD_LYFT_ETAS} from '../actions/quote_actions';
import {merge} from 'lodash';

const _noProducts = {
  errors: {},
  prices: {},
  times: {}
};

const QuoteReducer = (state = _noProducts, action) => {
  Object.freeze(state);
  switch (action.type) {
    case ADD_UBER_QUOTES:
      const newProducts = merge({}, state.prices, action.quotesObj);
      return merge({}, state, {prices: {uber: newProducts}});
    case ADD_LYFT_QUOTES:
      const newProducts = merge({}, state.prices, action.quotesObj);
      return merge({}, state, {prices: {lyft: newProducts}});
    case ADD_UBER_ETAS:
      const newTimes = merge({}, state.times, action.timesObj);
      return merge({}, state, {times: {uber: newTimes}});
    case ADD_LYFT_ETAS:
      const newTimes = merge({}, state.times, action.timesObj);
      return merge({}, state, {times: {lyft: newTimes}});
    default:
      return state;
  }
};
