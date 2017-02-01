const menubar = require('menubar');
require('babel-register');

const mb = menubar({
  showDockIcon: true,
  preloadWindow: true,
  alwaysOnTop: true,
  width: 700,
  height: 300,
  x: 1000,

  // TODO dev only
});

mb.on('ready', function ready () {
  console.log('app is ready');
  // your app code here
});

mb.on('after-create-window', () => mb.window.openDevTools());
