const fs = require('fs');
const download = require('download');
const {
  downloadMetadataIcons,
} = require('../lib/icon-list-generator');
const logs = require('../lib/logs');

const iconsMetadataURL = 'https://fonts.google.com/metadata/icons';
const CSSFontsDestination = 'src/__csscache__/';
const fontsDestination = 'demo/public/fonts/';
const fontsPublic = '/fonts/';
const importSASSFileName = 'icons.sass';
const importCSSFileName = 'local-icons.css';
const fontsContent = [];

function downloadCSSAndFonts (data = { families: [] }) {
  logs.norm('\nDownloading CSS files...');
  return new Promise((resolve, reject) => {
    const links = data.families
      .map(type => 'https://fonts.googleapis.com/css2?family=' + type.replace(/\s/g, '+'));

    Promise.all(links.map(url => {
      const id = links.indexOf(url);
      const fileName = data.families[id].replace(/\s/g, '-');
      const fileNameWithExtension = fileName + '.css';
      return download(url, CSSFontsDestination, { filename: fileNameWithExtension })
        .then(content => saveURLFromCSS(fileName, content))
        .then(() => logs.splitSuccess(fileNameWithExtension, ' done'));
    }))
      .then(() => resolve(data.families))
      .catch(reject);
  });
}

function createSASSImportFile (families) {
  return new Promise((resolve, reject) => {
    const data = families
      .map(fileName => `@import "${CSSFontsDestination}${fileName.replace(/\s/g, '-')}"`)
      .join('\n');
    fs.writeFile(CSSFontsDestination + importSASSFileName, data, err => {
      if (err) reject(err);
      else {
        logs.splitSuccess('\n' + importSASSFileName, ' done');
        resolve();
      }
    });
  });
}

function saveURLFromCSS (fileName, content) {
  content = String(content);
  const findURL = content.match(/url\(\S*\)/g);
  const clearURL = String(findURL).replace('url(', '').replace(')', '');
  const extension = '.' + clearURL.split('.').pop();
  fontsContent.push({
    content,
    fileName,
    file: fileName + extension,
    url: clearURL,
  });
}

function downloadFonts () {
  logs.norm('\nDownloading fonts files...');
  return new Promise((resolve, reject) => {
    Promise.all(fontsContent.map(({ url, file }) => {
      return download(url, fontsDestination, { filename: file })
        .then(() => logs.splitSuccess(file, ' done'));
    }))
      .then(resolve)
      .catch(reject);
  });
}

function createCSSImportFile () {
  return new Promise((resolve, reject) => {
    const data = fontsContent
      .map(({ file, content }) => content.replace(/url\(\S*\)/g, `url("${fontsPublic + file}")`))
      .join('\n');
    fs.writeFile(CSSFontsDestination + importCSSFileName, data, err => {
      if (err) reject(err);
      else {
        logs.splitSuccess('\n' + importCSSFileName, ' done');
        resolve();
      }
    });
  });
}

downloadMetadataIcons(iconsMetadataURL)
  .then(downloadCSSAndFonts)
  .then(createSASSImportFile)
  .then(downloadFonts)
  .then(createCSSImportFile)
  .then(() => logs.success('\nAll done!'))
  .catch(console.error);
