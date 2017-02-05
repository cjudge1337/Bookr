import { RECEIVE_SELECTED_RIDE} from '../actions/confirm_actions';

const ConfirmReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SELECTED_RIDE:
      return action.ride;
    default:
      return state;
  }
};

export default ConfirmReducer;
