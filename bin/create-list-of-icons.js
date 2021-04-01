const {
  generateIconsDictionary,
  generateTypesDictionary,
  downloadMetadataIcons,
  writeTextIntoFile,
} = require('../lib/icon-list-generator');
const logs = require('../lib/logs');

const iconListSource = 'https://fonts.google.com/metadata/icons';
const iconListDestination = './src/__jscash__/icons-names.js';
const iconTypesDestination = './src/__jscash__/icons-types.js';

function createFileWithIcons (data = { icons: [] }) {
  return generateIconsDictionary(data.icons)
    .then(dictionary => writeTextIntoFile(iconListDestination, dictionary))
    .then(() => {
      logs.norm('icons ~> ' + iconListDestination);
      return data;
    });
}
function createFileWithIconsTypes (data = { families: [] }) {
  return generateTypesDictionary(data.families)
    .then(dictionary => writeTextIntoFile(iconTypesDestination, dictionary))
    .then(() => {
      logs.norm('types ~> ' + iconTypesDestination);
      return data;
    });
}

downloadMetadataIcons(iconListSource)
  .then(createFileWithIcons)
  .then(createFileWithIconsTypes)
  .then(() => logs.success('Done!'))
  .catch(console.error);
