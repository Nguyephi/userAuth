const path = require('path');
require('dotenv').config();

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './client/src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'client/public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                exclude: /node_modules/
            }
        ],
    }
};