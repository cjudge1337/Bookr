import { merge, extend } from 'lodash';
import { RECEIVE_UBER_CREDS } from '../actions/auth_actions';

const _nullState = Object.freeze({
  uberCreds: null,
  lyftCreds: null
});

const SessionReducer = (state = _nullState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_UBER_CREDS:
      return merge({}, state, { uberCreds: action.uberCreds });
    default:
      return state;
  }
};

export default SessionReducer;
