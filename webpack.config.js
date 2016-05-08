var webpack = require('webpack');
var path = require('path');


var config = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server',
		'./src/index.js' // Your appʼs entry point
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		alias:{
      bootstrap:`${__dirname}/node_modules/bootstrap`
    }
	},
	module: {
		loaders: [
      { test: /\.(js|jsx)*$/,                                   loader: 'babel', query: { presets: ['react-hmre'] }, exclude: [/node_modules/, /.+\.config.js/] },
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/,                                        loaders: ['style', 'css', 'less'] },
      { test: /\.scss$/,                                        loaders: ['style', 'css', 'sass'] },
			{ test: /\.json$/,                                        loaders: ['json'] },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
			{ test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
			{ test: /\.gif/, loader: "url-loader?limit=10000&mimetype=image/gif" },
			{ test: /\.jpg/, loader: "url-loader?limit=10000&mimetype=image/jpg" },
			{ test: require.resolve('jquery'),                        loader: 'expose?$!expose?jQuery' },
			{ test: /bootstrap\/\dist\/js\//,                                loader: 'imports?jQuery=jquery' },
			{ test: /\.png/, loader: "url-loader?limit=10000&mimetype=image/png" }
		]
	},
	devServer: {
		contentBase: "./public",
		noInfo: true, //  --no-info option
		hot: true,
		inline: true
	},
	plugins: [
		new webpack.NoErrorsPlugin()
	]
};


if (process.env.NODE_ENV == 'production'){
	config.entry.splice(0,2);
	delete config.devServer;
	module.exports = config ;
}
else{
	module.exports = config ;
}
