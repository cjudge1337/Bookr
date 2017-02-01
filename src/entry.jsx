import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as LyftAPIUtil from './util/lyft/quotes';
import * as UberAPIUtil from './util/uber/quotes';

import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  window.getCost = LyftAPIUtil.getCost;
  window.getUberCosts = UberAPIUtil.getAllProductQuotes;
  window.getUberCost = UberAPIUtil.getProductQuote;
  window.makeRide = UberAPIUtil.createRide;
  window.getInfo = UberAPIUtil.getRideInfo;
  window.getMap = UberAPIUtil.getRideMap;
  window.deleteRide = UberAPIUtil.deleteRide;
  window.getProducts = UberAPIUtil.getUberProducts;
  window.getEta = LyftAPIUtil.getEta;
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
