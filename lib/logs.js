const {
  FgGreen,
  FgYellow,
  FgCyan,
  FgRed,
} = require('../lib/console-colors');

module.exports = {
  error (text) {
    console.log(FgRed + text);
  },
  norm (text) {
    console.log(FgCyan + text);
  },
  warn (text) {
    console.log(FgYellow + text);
  },
  splitSuccess (text, successText) {
    console.log(FgCyan + text + FgGreen + successText);
  },
  success (text) {
    console.log(FgGreen + text);
  },
};
