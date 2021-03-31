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
import MaterialIcons from '@dbetka/material-icons';

Vue.use(MaterialIcons);
```

### Individual components
with default name
```js
import { Icon } from '@dbetka/material-icons';

Vue.component(Icon.name, Icon); // component name is icon
```
with own name
```js
import { Icon } from '@dbetka/material-icons';

Vue.component('a-icon', Icon); // component name is a-icon
```

## Project maintenance

Scripts used in `package.json` has own docs [here](scripts/README.md)
