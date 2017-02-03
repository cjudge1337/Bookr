import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import QuoteReducer from './quote_reducer';
import EnrouteReducer from './enroute_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  quotes: QuoteReducer,
  enroute: EnrouteReducer
});

export default RootReducer;
