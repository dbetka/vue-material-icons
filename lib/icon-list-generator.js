const fs = require('fs')
const fetch = require('node-fetch')
const logs = require('../lib/logs')

function removeDuplicates (list) {
  return Array.from(new Set(list))
}
function createDictionaryFromLines (name, definitions, lines) {
  const typeName = name[0].toUpperCase() + name.slice(1)
  let fileContent = ''
  fileContent += `export declare type ${typeName} = {\n`
  fileContent += removeDuplicates(definitions).join('')
  fileContent += '};\n\n'

  fileContent += `export const ${name}: ${typeName} = {\n`
  fileContent += removeDuplicates(lines).join('')
  fileContent += '};\n'
  return fileContent
}

function generateIconsDictionary (icons) {
  return new Promise(resolve => {
    const definitions = icons.map(icon => `  '${icon.name}': string\n`)
    const lines = icons.map(icon => `  '${icon.name}': '${icon.name}',\n`)
    resolve(createDictionaryFromLines('icons', definitions, lines))
  })
}
function generateTypesDictionary (types) {
  return new Promise(resolve => {
    const definitions = types.map(type => {
      const shortName = type.split(' ').slice(2).join('-') || 'filled'
      return `  '${shortName.toLowerCase()}': string\n`
    })

    const lines = types.map(type => {
      const shortName = type.split(' ').slice(2).join('-') || 'filled'
      return `  '${shortName.toLowerCase()}': '${type}',\n`
    })
    resolve(createDictionaryFromLines('iconsTypes', definitions, lines))
  })
}

function downloadMetadataIcons (inputListOfIcons) {
  logs.normTitle('Downloading icons metadata...')
  return new Promise((resolve, reject) => {
    fetch(inputListOfIcons)
      .then(response => response.text())
      .then(googleJSON => {
        const metadata = JSON.parse(googleJSON.substring(5))
        logs.success('Icons metadata downloaded', { indent: true })
        resolve(metadata)
      })
      .catch(reject)
  })
}

function writeTextIntoFile (destination, text) {
  return new Promise((resolve, reject) => {
    fs.writeFile(destination, text, error => {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}

module.exports = {
  generateIconsDictionary,
  generateTypesDictionary,
  downloadMetadataIcons,
  writeTextIntoFile,
}
