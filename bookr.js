const menubar = require('menubar');
require('babel-register');
require('./server.js');

const mb = menubar({
  showDockIcon: true,
  preloadWindow: true,
});

mb.on('ready', function ready () {
  console.log('app is ready');
  // your app code here
});
