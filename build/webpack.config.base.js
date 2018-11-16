const HtmlWebpackPlugin = require('html-webpack-plugin');

const { entry, htmlPath, babelPlugins } = require('./config');

module.exports = {
    entry,
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                        plugins: babelPlugins,
                    },
                },
                exclude: /node_modules/,
            },
        ],
    },  
    plugins: [
        new HtmlWebpackPlugin({
            template: htmlPath,
        })
    ]
}