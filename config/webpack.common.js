const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const keycloak = require('../keycloak.json');

module.exports = {
    entry: {
        main: ["babel-polyfill", path.resolve(__dirname, "../src", "index.js")],
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../build'),
        publicPath: "/"
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        overlay: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: [{ loader: "babel-loader" }]
            },
            {
                test: /.*\.(gif|png|jp(e*)g|svg)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 21000,
                            name: "images/[name]_[hash:7].[ext]"
                        }
                    }
                ]
            },
            // Vendor CSS loader
            // This is necessary to pack third party libraries like antd
            {
                test: /\.css$/,
                include: path.resolve(__dirname, '../node_modules'),
                use: [
                'style-loader',
                'css-loader'
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, '../public', 'index.html'),
        }),
        new GenerateJsonPlugin('keycloak.json', keycloak),
        // Copy environment configuration file to the production bundle
        new CopyWebpackPlugin([{
          from: path.resolve(__dirname, "../", "env.js"),
          to: 'env.js'
        }]),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
}
