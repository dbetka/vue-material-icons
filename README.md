# material-icons
Vue2 material design icons with easy access to icons names and types.

### How to install by npm
```bash
npm install -D @dbetka/material-icons
```

### Setup

Add as Vue plugin
```js
import MaterialIcons from '@dbetka/material-icons';

Vue.use(MaterialIcons);
```

Add component by own
```js
import { AIcon, IconComputed, IconFonts } from '@dbetka/material-icons';

Vue.use(IconFonts)
Vue.use(IconComputed)
Vue.component(AIcon.name, AIcon); // component name is `a-icon`
```

Set own component name
```js
import { AIcon, IconComputed, IconFonts } from '@dbetka/material-icons';

Vue.use(IconFonts)
Vue.use(IconComputed)
Vue.component('my-component', AIcon); // component name is `my-component`
```

## Usage
For Vue plugin setup
```vue
<template>
  <a-icon :name="ICONS.check" :type="ICONS_TYPES.outlined"/>
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
  <a-icon :name="ICONS.check" :type="ICONS_TYPES.outlined"/>
</template>

<script>
import { AIcon, ICONS, ICONS_TYPES, IconFonts } from '@dbetka/material-icons';

IconFonts.install();

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

### Actual list of icons
```js
import { ICONS } from '@dbetka/material-icons';

ICONS.check // returns `check`
ICONS.coronavirus // returns `coronavirus`
```

### Actual list of icon types
```js
import { ICONS_TYPES } from '@dbetka/material-icons';

ICONS_TYPES.filled // returns `Material Icons`
ICONS_TYPES.outlined // returns `Material Icons Outlined`
ICONS_TYPES.round // returns `Material Icons Round`
ICONS_TYPES.sharp // returns `Material Icons Sharp`
ICONS_TYPES['two-tone'] // returns `Material Icons Two Tone`
```
