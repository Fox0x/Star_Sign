const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development", // 'production'
	entry: ["@babel/polyfill", "./src/index.jsx"], // entry point
	output: {
		filename: "[name].[hash].js", // output file
		path: path.resolve(__dirname, "dist"), // output path
	},
	resolve: {
		extensions: [".jsx", "..."],
	},
	devServer: {
		port: 3000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		new CleanWebpackPlugin(), // clean dist folder
	],
	module: {
		rules: [
			{
				test: /\.(css)$/, // style loader
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/images",
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.m?jsx$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
		],
	},
};
