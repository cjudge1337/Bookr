import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import GOOGLE_API_KEY from '../config';
import configureStore from './store/store';

process.env.GOOGLE_API_KEY = GOOGLE_API_KEY;

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (sessionStorage.session) {
    let preloadedState = { session: JSON.parse(sessionStorage.session) };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
