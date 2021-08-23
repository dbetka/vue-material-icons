const path = require('path');
const projectRoot = path.resolve(__dirname);

module.exports = {
  banner: true,
  plugins: {
    vue: true,
    alias: {
      resolve: ['.js', '.vue', '.css', '.sass'],
      entries: [
        {
          find: /^plugin-src\/(.*)/,
          replacement: path.resolve(projectRoot, 'src/$1'),
        },
        {
          find: /^utils\/(.*)/,
          replacement: path.resolve(projectRoot, 'src/utils/$1'),
        },
        {
          find: /^components\/(.*)/,
          replacement: path.resolve(projectRoot, 'src/components/$1'),
        },
        {
          find: /^jscache\/(.*)/,
          replacement: path.resolve(projectRoot, 'src/__jscache__/$1'),
        },
        {
          find: /^csscache\/(.*)/,
          replacement: path.resolve(projectRoot, 'src/__csscache__/$1'),
        },
      ],
    },
    replace: {
      preventAssignment: true,
    },
  },
  output: {
    dir: 'dist',
    sourceMap: true,
    extractCSS: true,
  },
  bundleNodeModules: true,
};
