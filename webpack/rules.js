const resolve = require('./utils').resolve;

module.exports = {
  rules: [
    {
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [
        resolve('src'),
        resolve('demo'),
      ],
      options: {
        formatter: require('eslint-friendly-formatter'),
      },
    },
    {
      test: /\.(sass|scss)$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    },
    {
      test: /\.(css)$/,
      use: [
        'style-loader',
        'css-loader',
      ],
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      use: 'url-loader?limit=100000',
    },
    {
      test: /\.vue$/,
      use: 'vue-loader',
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: 'defaults' }],
            '@vue/cli-plugin-babel/preset',
          ],
        },
      },
    },
  ],
};
