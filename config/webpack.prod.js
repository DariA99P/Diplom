const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const enableBundleAnalyzer = process.env.ENABLE_ANALYZER === 'true';
const postcss = process.env.POST_CSS === 'true';

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, '../node_modules'),
        use: postcss
          ? [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  modules: true,
                  camelCase: true,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                },
              },
            ]
          : [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: false,
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, '../build')], {
      root: process.cwd(),
      verbose: true,
      dry: false,
    }),
    new OptimizeCssAssetsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css',
      chunkFilename: '[id].[hash:8].css',
    }),
    new MomentLocalesPlugin(),
    new ManifestPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: enableBundleAnalyzer === true ? 'static' : 'disabled',
      openAnalyzer: true,
    }),
  ],
});
