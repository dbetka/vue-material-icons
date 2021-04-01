const fs = require('fs');
const download = require('download');
const {
  downloadMetadataIcons,
} = require('../lib/icon-list-generator');
const logs = require('../lib/logs');

const iconsMetadataURL = 'https://fonts.google.com/metadata/icons';
const fontsDestination = 'src/__csscache__/';
const importFileName = 'icons.sass';

function downloadCSSFonts (data = { families: [] }) {
  logs.norm('\nDownloading CSS fonts files...');
  return new Promise(resolve => {
    const links = data.families
      .map(type => 'https://fonts.googleapis.com/css2?family=' + type.replace(/\s/g, '+'));

    Promise.all(links.map(url => {
      const id = links.indexOf(url);
      const fileName = data.families[id].replace(/\s/g, '-') + '.css';
      return download(url, fontsDestination, { filename: fileName })
        .then(() => logs.splitSuccess(fileName, ' done'));
    }))
      .then(() => resolve(data.families));
  });
}

function createImportFile (families) {
  return new Promise((resolve, reject) => {
    const data = families
      .map(fileName => `@import "${fontsDestination}${fileName.replace(/\s/g, '-')}"`)
      .join('\n');
    fs.writeFile(fontsDestination + importFileName, data, err => {
      if (err) reject(err);
      else {
        logs.splitSuccess('\n' + importFileName, ' done');
        resolve();
      }
    });
  });
}

downloadMetadataIcons(iconsMetadataURL)
  .then(downloadCSSFonts)
  .then(createImportFile)
  .then(() => logs.success('\nAll done!'))
  .catch(console.error);
