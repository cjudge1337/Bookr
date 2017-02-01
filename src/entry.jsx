import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as LyftAPIUtil from './util/lyft/quotes';
import * as UberAPIUtil from './util/uber/quotes';
import * as QuoteActions from './actions/quote_actions';

import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  window.getUberQuotes = QuoteActions.getUberQuotes;
  window.getLyftQuotes = QuoteActions.getLyftQuotes;
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
