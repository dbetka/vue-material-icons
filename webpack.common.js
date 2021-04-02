const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpackUtils = require('./webpack/utils');
const webpackRules = require('./webpack/rules').rules;
const resolve = webpackUtils.resolve;

module.exports = {
  mode: 'development',
  entry: {
    index: resolve('demo/src/index.js'),
  },
  output: {
    path: resolve('demo/public'),
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        {
          from: /.*/,
          to: '/index.html',
        },
      ],
    },
    contentBase: resolve('demo/public'),
    compress: true,
    host: '0.0.0.0',
    port: 8080,
  },
  module: {
    rules: webpackRules,
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      'demo': resolve('demo'),
      'material-icons': resolve('dist/index.js'),
      'material-icons-local': resolve('dist/local.js'),
      'router': resolve('demo/src/router'),
      'demo-src': resolve('demo/src'),
      'plugin-src': resolve('src'),
      'utils': resolve('src/utils'),
      'components': resolve('src/components'),
      'jscache': resolve('src/__jscache__'),
      'csscache': resolve('src/__csscache__'),
    },
    modules: [resolve('node_modules')],
    extensions: ['.vue', '.sass', '.js', '.css'],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};
