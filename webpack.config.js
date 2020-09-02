const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const argv = require('yargs').argv

const minimize = argv.mode == 'production'

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './package.js',
        libraryTarget: 'commonjs2'
    },
    optimization: {
        minimize,
        minimizer: [new TerserPlugin({
            parallel: false,
            sourceMap: false,
            cache: false,
            extractComments: false,
            terserOptions: {
                compress: {
                    drop_console: true,
                },
            }
        })]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env"]
                }
            },
        ]
    }
};