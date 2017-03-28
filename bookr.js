const menubar = require('menubar');
const path = require('path');
require('babel-register');
require('./server.js');

const mb = menubar({
  index: `file://${__dirname}/webview.html`,
  icon: path.join(__dirname, '/app/images/IconTemplate.png'),
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
