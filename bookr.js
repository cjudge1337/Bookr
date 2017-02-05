const menubar = require('menubar');
require('babel-register');
require('./server.js');

const mb = menubar({
  showDockIcon: true,
  preloadWindow: true,
  alwaysOnTop: true,
  width: 500,
  height: 600,
  x: 1000,

  // TODO dev only
});

mb.on('ready', function ready () {
  console.log('app is ready');
  // your app code here
});

mb.on('after-create-window', () => mb.window.openDevTools());
