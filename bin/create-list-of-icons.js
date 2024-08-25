const fs = require('fs')
const {
  generateIconsDictionary,
  generateTypesDictionary,
  downloadMetadataIcons,
  writeTextIntoFile,
} = require('../lib/icon-list-generator')
const logs = require('../lib/logs')

const iconListSource = 'https://fonts.google.com/metadata/icons'
const jscache = './src/jscache/'
const iconListDestination = jscache + 'icons-names.ts'
const iconTypesDestination = jscache + 'icons-types.ts'
const metadataDestination = jscache + 'icons-metadata.ts'

if (!fs.existsSync(jscache)){
  fs.mkdirSync(jscache)
}

function createFileWithIcons (data = { icons: [] }) {
  logs.normTitle('Saving icons names, types and metadata...')
  return generateIconsDictionary(data.icons)
    .then(dictionary => writeTextIntoFile(iconListDestination, dictionary))
    .then(() => {
      logs.done(iconListDestination)
      return data
    })
}
function createFileWithIconsTypes (data = { families: [] }) {
  return generateTypesDictionary(data.families)
    .then(dictionary => writeTextIntoFile(iconTypesDestination, dictionary))
    .then(() => {
      logs.done(iconTypesDestination)
      return data
    })
}
function createFileWithMetadata (data = { icons: [] }) {
  return writeTextIntoFile(metadataDestination, `export const iconsMetadata = ${JSON.stringify(data.icons)}`)
    .then(() => {
      logs.done(metadataDestination)
      return data
    })
}

downloadMetadataIcons(iconListSource)
  .then(createFileWithIcons)
  .then(createFileWithIconsTypes)
  .then(createFileWithMetadata)
  .then(() => logs.allDone())
  .catch(console.error)
