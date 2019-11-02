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
		}
	}
];