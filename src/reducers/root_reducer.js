import {combineReducers} from 'redux';
import QuoteReducer from './quote_reducer';

const RootReducer = combineReducers({
  quotes: QuoteReducer,
});

export default RootReducer;
