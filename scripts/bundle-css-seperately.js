const dirTree = require('directory-tree');
const dir = require('./tools/dir.js');
const file = require('./tools/file.js');
const { input } = require('./tools/vars.js');

const stylesTree = dirTree(input, { extensions: /\.sass/ });

dir.recursiveMake(stylesTree);
file.recursiveConvertAndMake(stylesTree);

