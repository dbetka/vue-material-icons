# material-icons
Vue2 material design icons with easy access to icons names.

## Setup

#### Put into html 

#### Full Bundle
```js
import MaterialIcons from '@dbetka/material-icons';

Vue.use(MaterialIcons);
```

### Individual components
with default name
```js
import { AIcon } from '@dbetka/material-icons';

Vue.component(AIcon.name, AIcon); // component name is `a-icon`
```
with own name
```js
import { AIcon } from '@dbetka/material-icons';

Vue.component('my-component', AIcon); // component name is `my-component`
```

## Usage
For full bundle setup
```vue
<template>
  <a-icon :name="ICONS.check"/>
</template>

<script>
export default {
  name: 'some-page',
};
</script>
```
For a setup in single component
```vue
<template>
  <a-icon :name="ICONS.check"/>
</template>

<script>
import { AIcon } from '@dbetka/material-icons';
import { ICONS } from '@dbetka/material-icons';

export default {
  name: 'some-page',
  components: {
    AIcon,
  },
  computed: {
    ICONS,
  },
};
</script>
```

#### List of icons
```js
import { ICONS } from '@dbetka/material-icons';

ICONS().check // returns `check`
```

## Project maintenance

Scripts used in `package.json` has own docs [here](scripts/README.md)
