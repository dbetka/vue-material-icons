import './style/index.sass'
// import Menu from './components/Menu.vue'
import { App } from 'vue'
import { icons, Icons } from 'jscache/icons-names'
import { iconsTypes, IconsTypes } from 'jscache/icons-types'

export declare interface MaterialIcons {
  readonly names: Icons;
  readonly types: IconsTypes;
  install(app: App): void;
}

const materialIcons: MaterialIcons = {
  names: icons,
  types: iconsTypes,
  install (app) {
    app.config.globalProperties.$icons = this
  },
}

export {
  // Menu,
  materialIcons,
}
