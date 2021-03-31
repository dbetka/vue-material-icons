const fs = require('fs');
const fetch = require('node-fetch');

function convertCodepointsToJSList (icons) {
  const lines = icons
    .map(icon => {
      return `  '${icon.name}': '${icon.name}',\n`;
    });

  const removeDuplicates = list => {
    return Array.from(new Set(list));
  };

  let fileContent = 'export const ICONS = {\n';
  fileContent += removeDuplicates(lines).join('');
  fileContent += '};\n';
  return fileContent;
}

function generateListOfIcons (inputListOfIcons) {
  return new Promise((resolve, reject) => {
    fetch(inputListOfIcons)
      .then(response => response.text())
      .then(googleJSON => {
        const data = JSON.parse(googleJSON.substring(5));
        resolve(convertCodepointsToJSList(data.icons));
      })
      .catch(reject);
  });
}

function writeListOfIconsIntoFile (iconListDestination, list) {
  return new Promise((resolve, reject) => {
    fs.writeFile(iconListDestination, list, error => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

module.exports = {
  generateListOfIcons,
  writeListOfIconsIntoFile,
};
