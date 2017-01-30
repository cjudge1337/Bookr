var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./src/entry",
  output: {
    path: path.join(__dirname, 'app'),
    filename: "bundle.js",
    publicPath: '/app'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  },
  node: {
    fs: "empty"
  }
};
