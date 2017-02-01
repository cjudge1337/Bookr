const menubar = require('menubar');
require('babel-register');
require('./server.js');

const mb = menubar({
  showDockIcon: true,
  preloadWindow: true,
  // index: `file://${__dirname}/app.html`,
});

mb.on('ready', function ready () {
  console.log('app is ready');
  // your app code here
});
