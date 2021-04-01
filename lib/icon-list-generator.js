const fs = require('fs');
const fetch = require('node-fetch');
const logs = require('../lib/logs');

function removeDuplicates (list) {
  return Array.from(new Set(list));
}
function createDictionaryFromLines (name, lines) {
  let fileContent = `export const ${name} = {\n`;
  fileContent += removeDuplicates(lines).join('');
  fileContent += '};\n';
  return fileContent;
}

function generateIconsDictionary (icons) {
  return new Promise(resolve => {
    const lines = icons.map(icon => `  '${icon.name}': '${icon.name}',\n`);
    resolve(createDictionaryFromLines('ICONS', lines));
  });
}
function generateTypesDictionary (types) {
  return new Promise(resolve => {
    const lines = types.map(type => `  '${type}': '${type}',\n`);
    resolve(createDictionaryFromLines('ICONS_TYPES', lines));
  });
}

function downloadMetadataIcons (inputListOfIcons) {
  logs.norm('\nDownloading icons metadata...');
  return new Promise((resolve, reject) => {
    fetch(inputListOfIcons)
      .then(response => response.text())
      .then(googleJSON => {
        const metadata = JSON.parse(googleJSON.substring(5));
        logs.success('Icons metadata downloaded...');
        resolve(metadata);
      })
      .catch(reject);
  });
}

function writeTextIntoFile (destination, text) {
  return new Promise((resolve, reject) => {
    fs.writeFile(destination, text, error => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

module.exports = {
  generateIconsDictionary,
  generateTypesDictionary,
  downloadMetadataIcons,
  writeTextIntoFile,
};
