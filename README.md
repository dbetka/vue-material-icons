# material-icons
Vue2 material design icons with easy access to icons names and types (all available in IDE hints).
Hints were tested on IntelliJ IDE.

### How to install by npm
```bash
npm install -D @dbetka/vue-material-icons
```

### Setup

Add as Vue plugin
```js
import MaterialIcons from '@dbetka/vue-material-icons';

Vue.use(MaterialIcons);
```

Add component by own
```js
import { AIcon, IconComputed } from '@dbetka/vue-material-icons';

Vue.use(IconComputed)
Vue.component(AIcon.name, AIcon); // component name is `a-icon`
```

Set own component name
```js
import { AIcon, IconComputed } from '@dbetka/vue-material-icons';

Vue.use(IconComputed)
Vue.component('my-component', AIcon); // component name is `my-component`
```

### Usage
For Vue plugin setup
```vue
<template>
  <div>
    <a-icon :name="ICONS.delete" outlined/>
    <a-icon :name="ICONS.delete" :type="ICONS_TYPES.outlined"/>
  </div>
</template>

<script>
export default {
  name: 'some-page',
};
</script>
```
For once in component
```vue
<template>
  <div>
    <a-icon :name="ICONS.delete" outlined/>
    <a-icon :name="ICONS.delete" :type="ICONS_TYPES.outlined"/>
  </div>
</template>

<script>
import { AIcon, ICONS, ICONS_TYPES } from '@dbetka/vue-material-icons';

export default {
  name: 'some-page',
  components: {
    AIcon,
  },
  computed: {
    ICONS: () => ICONS,
    ICONS_TYPES: () => ICONS_TYPES,
  },
};
</script>
```

### Access to list of icons
```js
import { ICONS } from '@dbetka/vue-material-icons';

ICONS.check // returns `check`
ICONS.coronavirus // returns `coronavirus`
```

### Access to list of icon types
```js
import { ICONS_TYPES } from '@dbetka/vue-material-icons';

ICONS_TYPES.filled // returns `Material Icons`
ICONS_TYPES.outlined // returns `Material Icons Outlined`
ICONS_TYPES.round // returns `Material Icons Round`
ICONS_TYPES.sharp // returns `Material Icons Sharp`
ICONS_TYPES['two-tone'] // returns `Material Icons Two Tone`
```

###  Own files of fonts for icons
1. Copy `demo/public/html-api/fonts/material-icons/` into `html-api/fonts/material-icons/`
   in your server public directory.
   
2. Use `local` script from plugin instead of default. Example:
```js
import MaterialIcons from '@dbetka/vue-material-icons/local';

Vue.use(MaterialIcons);
```
3. Now everything should work properly. :)
