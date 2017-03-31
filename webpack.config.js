const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

let entry = [
    './src/app.js'
]

let output = {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.[hash].js'
}

let plugins = [
    new webpack.NamedModulesPlugin(),
    // new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
        title: 'Ahoy!',
        template: path.resolve(__dirname, 'src', 'index-template.html')
    }),
    new ExtractTextPlugin({
        filename: 'app.[contenthash].css'
    })
]

const config = {
    entry,
    output,
    plugins,
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"],
                    publicPath: '/dist'
                })
            }
        ]
    }
}

module.exports = config