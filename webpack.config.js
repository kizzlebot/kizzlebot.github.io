var webpack = require('webpack');
var path = require('path');

console.log(require.resolve('./node_modules/guaw-dev/dist/js/jquery.guaw.min.js'));
var config = {
	// devServer: {
	// 	contentBase: "./public",
	// 	noInfo: true, //  --no-info option
	// 	hot: true,
	// 	inline: true
	// },
	//
	//
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
		'webpack/hot/only-dev-server',
		'./src/index.js' // Your appʼs entry point
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'eval',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath:'/public/'
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		alias:{
      bootstrap:`${__dirname}/node_modules/bootstrap`,
			'guav-dev':`${__dirname}/node_modules/guaw-dev/dist/js/jquery.guaw.min.js`
    }
	},
	module: {
		loaders: [
      { test: /\.(js|jsx)*$/,                                   loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'src')},
			{ test: /\.css$/, 																				loader: 'style-loader!css-loader' },
      { test: /\.less$/,                                        loaders: ['style', 'css', 'less'] },
      { test: /\.scss$/,                                        loaders: ['style', 'css', 'sass'] },
			{ test: /\.json$/,                                        loaders: ['json'] },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 										loader: "file" },
			{ test: /\.(woff|woff2)$/, 																loader: "url?prefix=font/&limit=5000" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 										loader: "url?limit=10000&mimetype=application/octet-stream" },
			// { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 										loader: "url?limit=10000&mimetype=image/svg+xml" },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 										loader: 'svg-inline'},
			{ test: /\.gif/, 																					loader: "url-loader?limit=10000&mimetype=image/gif" },
			{ test: /\.jpg/, 																					loader: "url-loader?limit=10000&mimetype=image/jpg" },
			{ test: /\.png/, 																					loader: "url-loader?limit=10000&mimetype=image/png" },
			{ test: require.resolve('jquery'),                        loader: 'expose?$!expose?jQuery' },
			{ test: require.resolve('snapsvg'), 											loader: 'imports-loader?this=>window,fix=>module.exports=0' },
			{ test: require.resolve('./node_modules/guaw-dev/dist/js/jquery.guaw.min.js'), 											loader: 'imports-loader?this=>window,fix=>module.exports=0' },
			{ test: /bootstrap\/\dist\/js\//,                         loader: 'imports?jQuery=jquery' }
		]
	},


	plugins: [
		new webpack.ProvidePlugin({
			'__dirname':__dirname
		}),
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
};


if (process.env.NODE_ENV == 'production'){
	config.entry.splice(0,2);
	config.plugins.splice(2,1);
	delete config.devServer;
}


module.exports = config ;
