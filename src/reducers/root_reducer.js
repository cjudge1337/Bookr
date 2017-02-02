import {combineReducers} from 'redux';
import EnrouteReducer from './enroute_reducer';

const RootReducer = combineReducers({
  enroute: EnrouteReducer
});

export default RootReducer;
