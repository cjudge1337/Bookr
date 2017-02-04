import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

let preState;

if (sessionStorage.session) {
  preState = { session: JSON.parse(sessionStorage.session) };
} else {
  preState = {};
}

const configureStore = (preloadedState = preState) => (
  createStore(RootReducer, preloadedState, applyMiddleware(thunk))
);

export default configureStore;
