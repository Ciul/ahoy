const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// Environment
const isProduction = process.env.NODE_ENV === 'production'

// Entry
const entry = [
    'babel-polyfill',
    './src/app.js'
]

// Output
const output = {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.[hash].js'
}

// CSS
const cssDev = ['style-loader', 'css-loader', 'sass-loader']
const cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader'],
    publicPath: '/dist'
})
const cssConfig = isProduction ? cssProd : cssDev

// Plugins
const plugins = [
    new HtmlWebpackPlugin({
        title: 'Ahoy!',
        template: path.resolve(__dirname, 'src', 'index-template.html')
    }),
    new ExtractTextPlugin({
        filename: 'app.[contenthash].css',
        disable: !isProduction,
        allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
]

// Dev Server
const devServer = {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    stats: 'minimal',
    hot: true
}

// Devtool
const devtoolDev = 'inline-source-map'
const devtoolProd = 'hidden-source-map'
const devtool = isProduction ? devtoolProd : devtoolDev

// Configuration
const config = {
    entry,
    output,
    plugins,
    devServer,
    devtool,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: cssConfig
            }
        ]
    }
}

module.exports = config
