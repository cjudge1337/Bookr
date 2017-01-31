import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
// import test from './util/uber/quotes';
import test from './util/lyft/quotes';

import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  window.test = test;
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
