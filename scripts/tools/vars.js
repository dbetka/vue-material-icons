const { argv } = require('yargs');

const TYPES = {
  directory: 'directory',
  file: 'file',
};

const input = argv.input || argv.i;
const output = argv.output || argv.o;
const baseFile = argv.baseFile || argv.b;

module.exports = {
  TYPES,
  input,
  output,
  baseFile,
}
