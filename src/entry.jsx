import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as LyftAPIUtil from './util/lyft/quotes';

import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  window.getEta = LyftAPIUtil.getEta;
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
