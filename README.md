# material-icons
Template for vue plugin project with SASS and global imports for SASS.

## Installation
```
npm i
```

## Building
```
npm run build                   Build js and css bundles from all js, vue and sass files.

npm run build-plugin            Build js bundle from js and vue files.

npm run build-css               Build css bundles from all sass files (run all scripts includes css in name).

npm run build-full-css          Build one css bundle from all sass files.
npm run build-wigets-css        Build css bundles for each sass component file which will has included base-file.sass on the beginning.
npm run build-themes-css        Build css bundles for each sass theme file.
```

## Usage outside of plugin

#### Full Bundle
```js
import VueAtomic from 'vue-plugin-template' // vue-plugin-template is path to plugin directory
import 'vue-plugin-template/dist/themes/light.css'
import 'vue-plugin-template/dist/index.css'

Vue.use(VueAtomic)
```

### Individual components
with default name
```js
import { OwnButton } from 'vue-plugin-template' // vue-plugin-template is path to plugin directory
import 'vue-plugin-template/dist/themes/light.css'
import 'vue-plugin-template/dist/own-button.css'

Vue.component(OwnButton.name, OwnButton) // component name is own-button
```
with own name
```js
import { OwnButton } from 'vue-plugin-template' // vue-plugin-template is path to plugin directory
import 'vue-plugin-template/dist/themes/light.css'
import 'vue-plugin-template/dist/own-button.css'

Vue.component('new-button', OwnButton) // component name is new-button
```

## Project maintenance 

Scripts used in `package.json` has own docs [here](scripts/README.md)
