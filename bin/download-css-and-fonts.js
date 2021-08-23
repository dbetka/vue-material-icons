const fs = require('fs');
const download = require('download');
const {
  downloadMetadataIcons,
} = require('../lib/icon-list-generator');
const logs = require('../lib/logs');

const iconsMetadataURL = 'https://fonts.google.com/metadata/icons';
const CSSFontsDestination = 'src/__csscache__/';
const fontsDestination = 'demo/public/html-api/fonts/material-icons/';
const fontsPublicURL = '/html-api/fonts/material-icons/';
const importSASSFileName = 'icons.sass';
const importCSSFileName = 'local-icons.css';
const fontsContent = [];

function addFontDisplayToFile (src) {
  const content = fs.readFileSync(src, 'utf-8');
  const newContent = content.replace(/@font-face {\n/gm, '@font-face {\n  font-display: block;\n');
  fs.writeFileSync(src, newContent, 'utf-8');
  logs.norm('- add `font-display: block`', { indent: true });
}

function addFontDisplayToText (text) {
  return text.replace(/@font-face {\n/gm, '@font-face {\n  font-display: block;\n');
}

function downloadCSSAndFontsRecursive (data, links, iter = 0) {
  const url = links[iter];
  const fileName = data.families[iter].replace(/\s/g, '-');
  const fileNameWithExtension = fileName + '.css';
  return download(url, CSSFontsDestination, { filename: fileNameWithExtension })
    .then(content => {
      saveURLFromCSS(fileName, addFontDisplayToText(String(content)));
      logs.done(fileNameWithExtension);
      addFontDisplayToFile(CSSFontsDestination + fileNameWithExtension);
      iter++;
      if (links.length > iter) return downloadCSSAndFontsRecursive(data, links, iter);
      else return Promise.resolve();
    });
}

function downloadCSSAndFonts (data = { families: [] }) {
  logs.normTitle('Downloading CSS files...');
  return new Promise((resolve, reject) => {
    const links = data.families
      .map(type => 'https://fonts.googleapis.com/css2?family=' + type.replace(/\s/g, '+'));

    downloadCSSAndFontsRecursive(data, links)
      .then(() => resolve(data.families))
      .catch(reject);
  });
}

function createSASSImportFile (families) {
  logs.normTitle('Create SASS import file...');
  return new Promise((resolve, reject) => {
    const data = families
      .map(fileName => `@import "${CSSFontsDestination}${fileName.replace(/\s/g, '-')}"`)
      .join('\n');
    fs.writeFile(CSSFontsDestination + importSASSFileName, data, err => {
      if (err) reject(err);
      else {
        logs.done(importSASSFileName);
        resolve();
      }
    });
  });
}

function saveURLFromCSS (fileName, content) {
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

function downloadFontRecursive (fontsContent, iter = 0) {
  const { url, file } = fontsContent[iter];
  return download(url, fontsDestination, { filename: file })
    .then(() => {
      logs.done(file);
      iter++;
      if (fontsContent.length > iter) return downloadFontRecursive(fontsContent, iter);
      else return Promise.resolve();
    });
}

function downloadFonts () {
  logs.normTitle('Downloading fonts files...');
  return new Promise((resolve, reject) => {
    downloadFontRecursive(fontsContent)
      .then(resolve)
      .catch(reject);
  });
}

function createCSSImportFile () {
  logs.normTitle('Create CSS import file...');
  return new Promise((resolve, reject) => {
    const data = fontsContent
      .map(({ file, content }) => content.replace(/url\(\S*\)/g, `url("${fontsPublicURL + file}")`))
      .join('\n');
    fs.writeFile(CSSFontsDestination + importCSSFileName, data, err => {
      if (err) reject(err);
      else {
        logs.done(importCSSFileName);
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
  .then(() => logs.allDone())
  .catch(console.error);
