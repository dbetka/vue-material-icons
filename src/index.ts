import './style/index.sass'
import MaterialIcon from './components/material-icon.vue'
import { App } from 'vue'
import { icons, Icons } from './jscache/icons-names'
import { iconsTypes, IconsTypes } from './jscache/icons-types'
export type { Icons } from './jscache/icons-names'
export type { IconsTypes } from './jscache/icons-types'

export declare interface MaterialIcons {
  readonly names: Icons;
  readonly types: IconsTypes;
}

const materialIcons: MaterialIcons = {
  names: icons as Icons,
  types: iconsTypes as IconsTypes,
}

function useIcons (): MaterialIcons {
  return materialIcons as MaterialIcons
}
export default {
  MaterialIcon,
  useIcons,
  materialIcons,
  install: (app: App) => {
    console.log('test')
    app.config.globalProperties.$icons = materialIcons
    app.component('MaterialIcon', MaterialIcon)
  }
}

export {
  MaterialIcon,
  useIcons,
  materialIcons,
}
