const menubar = require('menubar');
const path = require('path');
require('babel-register');
require('./server.js');

const mb = menubar({
  showDockIcon: true,
  preloadWindow: true,
  width: 500,
  height: 600,
  movable: false,
  resizable: false,
});

mb.on('ready', function ready () {
  console.log('app is ready');
});
