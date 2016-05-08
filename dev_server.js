var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');


var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
});

server.listen(8080, '0.0.0.0', function (err, result) {
  if (err) return console.error(err);
  console.log('Listening at http://0.0.0.0:8080/');
});
