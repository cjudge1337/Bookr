import {combineReducers} from 'redux';

import QuoteReducer from './quote_reducer';
import EnrouteReducer from './enroute_reducer';

const RootReducer = combineReducers({
  quotes: QuoteReducer,
  enroute: EnrouteReducer,

});

export default RootReducer;
