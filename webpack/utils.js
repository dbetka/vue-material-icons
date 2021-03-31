const path = require('path');

module.exports = {
  resolve (dir) {
    return path.resolve(path.join(__dirname, '..'), dir);
  },
};
