import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as LyftAPIUtil from './util/lyft/quotes';
import $ from 'jquery';

import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  window.$ = $;

  window.getCost = LyftAPIUtil.getCost;
  const store = configureStore();
  const root = document.getElementById('root');

  window.store = store;

  ReactDOM.render(<Root store={ store }/>, root);
});
