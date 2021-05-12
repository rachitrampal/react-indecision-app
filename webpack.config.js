const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    // for loading babel in webpack we need the babel-loader and babel-core packages
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    // setting up source map for easy debugging the react errors in the source files rather than bundle.js
    devtool: 'cheap-module-eval-source-map',
    // set up dev server for easy execution of the app for development
    devServer: {
        contentBase: path.join(__dirname, 'public'),
    }
};