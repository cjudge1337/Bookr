import { merge } from 'lodash';
import { RECEIVE_UBER_RIDE_INFO, RECEIVE_UBER_MAP, REMOVE_UBER_RIDE,
  RECEIVE_LYFT_RIDE_INFO, REMOVE_LYFT_RIDE } from '../actions/enroute_actions';

const EnrouteReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_UBER_RIDE_INFO:
      return merge({}, state, { uber: { info: action.info } });
    case RECEIVE_LYFT_RIDE_INFO:
      return merge({}, state, { lyft: { info: action.info } });
    case RECEIVE_UBER_MAP:
      return merge({}, state, { uber: { map: action.mapInfo } });
    case REMOVE_UBER_RIDE:
      return {};
    case REMOVE_LYFT_RIDE:
      return {};
    default:
      return state;
  }
};

export default EnrouteReducer;
