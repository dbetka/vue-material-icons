# Scripts for package.json file

### bundle-css-assembly

```
Usage:
  node scripts/bundle-css-assembly.js --input <input.css> --output <output-directory>  [OPTIONS]

Basic options:
  -i, --input           Input file                                          [string]
  -o, --output          Output directory                                    [string]

Examples:
  Basic usage           node scripts/bundle-css-assembly.js --input src/index.sass --output dist

```

### bundle-css-seperately

```
Usage:
  node scripts/bundle-css-seperately.js --input <input-directory> --output <output-directory> [OPTIONS]
  node scripts/bundle-css-seperately.js --input <input-directory> --output <output-directory> --base-file <base-file>

Basic options:
  -i, --input         Output directory                                       [string]
  -o, --output        Output file                                            [string]
  -b, --base-file     File added on the begining each bundled file           [string]

Examples:
    Basic usage         node scripts/bundle-css-seperately.js -i src/styles/themes -o dist/themes
    Base file           node scripts/bundle-css-seperately.js -i src/styles/components -o dist -b src/base-file.sass
```

### package.json example

```json
// package.json
{
  "name": "@dbetka/vue-atomic",
  "version": "0.0.5",
  [...]
  "scripts": {
    "build-full-css": "node scripts/bundle-css-assembly.js --input src/index.sass --output dist",
    "build-wigets-css": "node scripts/bundle-css-seperately.js --input src/styles/components --output dist --base-file src/base-file.sass",
    "build-themes-css": "node scripts/bundle-css-seperately.js --input src/styles/themes --output dist/themes",
  },
  [...]
}

```
