const fs = require('fs');
const sass = require('node-sass');
const { importGlob } = require('./importGlob')
const { TYPES, input, output, baseFile } = require('./vars.js');

function readFile (path) {
  return path ? fs.readFileSync(path, 'utf8') : undefined;
}

function makeFile (path, value) {
  fs.writeFile(path, value, error => {
    if (error) {
      console.error(error);
    }
  });
}

function convertSASSToCSS (data) {
  data = importGlob(data)
  return sass.renderSync({
    data,
    indentedSyntax: true,
  }).css.toString();
}

function mergeBaseFileAndConvertSASSToCSS (dirFile) {
  const baseFileContent = readFile(baseFile) || '';
  const fileToConvert = readFile(dirFile.path);

  return convertSASSToCSS(baseFileContent + '\n' + fileToConvert);
}

function recursiveConvertAndMake (dirTree) {
  if (dirTree.type === TYPES.directory) {
    if (dirTree.children.length > 0) {
      for (const childrenDir of dirTree.children) {
        recursiveConvertAndMake(childrenDir);
      }
    }
  } else if (dirTree.type === TYPES.file) {
    const value = mergeBaseFileAndConvertSASSToCSS(dirTree);
    const newPath = dirTree.path.replace(input, output).replace(/\.sass$/, '.css');
    makeFile(newPath, value);
  }
}

module.exports = {
  read: readFile,
  make: makeFile,
  convertSASSToCSS,
  recursiveConvertAndMake,
};
