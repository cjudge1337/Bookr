import { RECEIVE_SELECTED_RIDE, CLEAR_CONFIRM_STATE } from '../actions/confirm_actions';

const ConfirmReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SELECTED_RIDE:
      return action.ride;
    case CLEAR_CONFIRM_STATE:
      return {};
    default:
      return state;
  }
};

export default ConfirmReducer;
