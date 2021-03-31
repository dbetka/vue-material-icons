const fs = require('fs');
const { TYPES, input, output } = require('./vars.js');

function make (dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

function recursiveMake (dirTree) {
  if (dirTree.type === TYPES.directory) {
    make(dirTree.path.replace(input, output));
    if (dirTree.children.length > 0) {
      for (const childrenDir of dirTree.children) {
        recursiveMake(childrenDir);
      }
    }
  }
}

module.exports = {
  make,
  recursiveMake,
};
