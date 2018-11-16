const path = require('path');

const port = 3000;
const entry = path.resolve(__dirname, '../src/main.jsx');
const outputPath = path.resolve(__dirname, '../dist');
const htmlPath = path.resolve(__dirname, '../src/index.html');

const babelPlugins = [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
    'react-hot-loader/babel',
]

module.exports = {
    entry,
    outputPath,
    port,
    htmlPath,
    babelPlugins,
}