var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
module.exports = {
    entry: APP_PATH,
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
                include: APP_PATH
            },
            {
                test: /\.scss/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
                include: APP_PATH
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: APP_PATH,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=40000'
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello World app'
        })
    ]
};
