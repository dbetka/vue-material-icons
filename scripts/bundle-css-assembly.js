const dir = require('./tools/dir');
const file = require('./tools/file');
const { input, output } = require('./tools/vars');

function getFileName (path) {
  return path.replace(/^[\w\/.]*\//, '').replace(/\.[\w]*$/, '')
}


function convertWithGlobImport () {
  const content = file.read(input)
  const cssContent = file.convertSASSToCSS(content)
  const fileName = getFileName(input) + '.css'
  dir.make(output)
  file.make(output + '/' + fileName, cssContent)
}

convertWithGlobImport()
