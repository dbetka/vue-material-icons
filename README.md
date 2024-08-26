# vue-material-icons
> Vue3 material design icons with easy access to icons names and types (all available in IDE hints).
Hints were tested on IntelliJ IDE. Fonts based on https://fonts.google.com/icons.

- [How to start](#how-to-start)
  - [Installation](#installation)
  - [Setup in project](#setup-in-project)
- [Usage](#usage)
  - [Base examples](#base-examples)
  - [Usage in Composition API](#usage-in-composition-api)
- [Own styles](#own-styles)
  - [Set icon color](#set-icon-color)
  - [Set icon size by style](#set-icon-size-by-style)

## How to start

### Installation
```bash
npm install -D @dbetka/vue-material-icons@latest
```

### Setup in a project

Add as Vue3 plugin:
```js
import '@dbetka/vue-material-icons/dist/index.css'
import materialIcons from '@dbetka/vue-material-icons';

const app = createApp(App);
app.use(materialIcons);
```

## Usage

### Base examples
```vue
<template>
  <div>
    <MaterialIcon name="delete" />
    <MaterialIcon name="delete" filled/>
    <MaterialIcon name="delete" outlined/>
    <MaterialIcon name="delete" round/>
    <MaterialIcon name="delete" sharp/>
    <MaterialIcon name="delete" two-tone/>
    <MaterialIcon name="delete" size="26"/>
  </div>
</template>
```

### Usage in Composition API

```vue
<script setup lang="ts">
  import { useIcons } from '@dbetka/vue-material-icons';
  import { computed } from 'vue'

  const props = defineProps<{
    done: boolean
  }>()

  const icons = useIcons()
  const currentIcon = computed(() => props.done ? icons.names.done : icons.names.hourglass_empty)
</script>

<template>
  <div>
    <MaterialIcon :name="currentIcon"/>
  </div>
</template>
```

## Own styles
Icon component CSS class is `material-icon`. You can modify this class styles by new CSS styles.

### Set icon color

Component with CSS example:
```vue
<template>
  <div>
    <MaterialIcon name="delete" class="red"/>
  </div>
</template>

<style>
.material-icon.red {
  color: red;
}
</style>
```

### Set icon size by style

Component with CSS example:
```vue
<template>
  <div>
    <MaterialIcon name="delete" class="bigger"/>
  </div>
</template>

<style>
.material-icon.bigger {
  font-size: 64px;
  width: 64px;
  height: 64px;
}
</style>
```

## Symbols metadata

Access to symbols metadata:
```vue
<script setup lang="ts">
  import { useIcons } from '@dbetka/vue-material-symbols';
  import { computed } from 'vue';
  
  /*** SymbolMetadata
    name: string
    version: number
    popularity: number
    codepoint: number
    categories: string[]
    tags: string[]
   */
  const { metadata } = useIcons()
  
  const symbolsSortedByPopularity = computed(() => metadata.sort((a, b) => b.popularity - a.popularity))
</script>

<template>
  <div>
    <MaterialIcon v-for="symbol of symbolsSortedByPopularity" :key="symbol.name" :name="symbol.name" />
  </div>
</template>
```
