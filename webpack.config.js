const webpack = require('webpack')
const path = require('path')

let entry = [
    './src/app.js'
]

let output = {
    filename: './dist/app.bundle.js'
}

const config = {
    entry: entry,
    output: output
}

module.exports = config