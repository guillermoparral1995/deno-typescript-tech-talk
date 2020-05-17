const path = require('path');
const env = process.env.NODE_ENV;

module.exports = {
    mode: env || 'development',
    target: 'node',
    devtool: 'inline-source-map',
    entry: ['@babel/polyfill', './index.ts'],
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};