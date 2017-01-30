const menubar = require('menubar');
require('babel-register');

const mb = menubar();

mb.on('ready', function ready () {
  console.log('app is ready');
  // your app code here
});
