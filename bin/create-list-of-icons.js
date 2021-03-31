const { generateListOfIcons, writeListOfIconsIntoFile } = require('../lib/icon-list-generator');
const { FgGreen, FgCyan } = require('../lib/console-colors');
const iconListSource = 'https://fonts.google.com/metadata/icons';
const iconListDestination = './src/__jscash__/icons-names-list.js';

function createListOfIconsFile () {
  console.log(FgCyan + '\nDownloading list of icons...');
  return generateListOfIcons(iconListSource)
    .then(list => writeListOfIconsIntoFile(iconListDestination, list))
    .then(() => {
      const splitSourcePath = iconListSource.split('/');
      const fileName = splitSourcePath[splitSourcePath.length - 1];
      console.log(FgCyan + fileName + ' ~> ' + iconListDestination);
      console.log(FgGreen + 'Done!');
    });
}

createListOfIconsFile()
  .catch(console.error);
