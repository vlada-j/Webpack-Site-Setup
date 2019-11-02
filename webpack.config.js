const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const files = require('./files.js');
const DES = path.resolve(__dirname, 'public_html/assets');

module.exports = [
	{
		mode: 'production',
		entry: files.js,
		output: {
			filename: '[name].js',
			path: DES
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: "babel-loader",
					sideEffects: false
				}
			]
		},
		watchOptions: {
			ignored: /node_modules/,
			aggregateTimeout: 300,
			poll: 1000
		}
	},
	{
		mode: 'production',
		entry: files.css,
		output: {
			path: DES
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: "[name].css"
			})
		],
		module: {
			rules: [
				{
					test: /\.s?css$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader'
					]
				}
			]
		},
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		}
	}
];