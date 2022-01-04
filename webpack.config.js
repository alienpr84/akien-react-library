const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
	mode: 'development',
	target: 'web',
	entry: join('example', 'index.tsx'),
	devServer: {
		hot: true,
		port: 4001,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: join(__dirname, 'example', 'public', 'index.html'),
		}),
		new ReactRefreshWebpackPlugin(),
	],
	resolve: {
		modules: [__dirname, "example", "node_modules"],
		extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				loader: require.resolve("babel-loader"),
				options: {
					plugins: [
						require.resolve("react-refresh/babel"),
					].filter(Boolean),
				},
			},
		],
	},
};