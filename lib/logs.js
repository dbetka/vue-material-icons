const {
  FgGreen,
  FgYellow,
  FgCyan,
  FgRed,
  Reset,
} = require('../lib/console-colors')

function log (text, options = { indent: false, gap: false }) {
  if (options.indent) text = '  ' + text
  if (options.gap) text = '\n' + text

  console.log(text + Reset)
}

const logs = {
  error (text, options) {
    log(FgRed + text, options)
  },
  norm (text, options) {
    log(FgCyan + text, options)
  },
  normTitle (text, options) {
    log(FgCyan + text, { ...options, gap: true })
  },
  warn (text, options) {
    log(FgYellow + text, options)
  },
  splitSuccess (text, successText, options) {
    log(FgCyan + text + FgGreen + successText, options)
  },
  done (text, options) {
    logs.splitSuccess(text, ' done', { ...options, indent: true })
  },
  allDone (options) {
    log(FgGreen + '\nAll done!', options)
  },
  success (text, options) {
    log(FgGreen + text, options)
  },
}

module.exports = logs
