const path = require('path');
const VENDORS = require('./vendor');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;


const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: path.resolve(__dirname, 'index.html'),
	filename: 'index.html',
	inject: 'body'
});

const ChunkWebpackConfig = new ChunkWebpack({
	names: ['vendor', 'manifest']
});

const config = {
	devtool: 'source-map',
	entry: {
		app: [path.resolve(__dirname, 'src', 'main.js')],
		vendor: VENDORS
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			}
		]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].[chunkhash].js'
	},
	resolve: {
		extensions: ['.js', '.jsx', 'css', '.less']
	},
	plugins: [
		HTMLWebpackPluginConfig,
		ChunkWebpackConfig,
		new ExtractTextPlugin({
			filename: 'index.css',
			disable: false,
			allChunks: true
		})
	],
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 3142
	}
};


module.exports = config;
