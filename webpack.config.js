const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let entry = [
    './src/app.js'
]

let output = {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
}

let plugins = [
    new HtmlWebpackPlugin({
        title: 'Ahoy!',
        template: path.resolve(__dirname, 'src', 'index-template.html')
    })
]

const config = {
    entry,
    output,
    plugins,
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    }
}

module.exports = config