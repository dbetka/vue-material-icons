import './style/index.sass'
import MaterialIcon from './components/material-icon.vue'
import { App } from 'vue'
import { icons, Icons } from './jscache/icons-names'
import { iconsTypes, IconsTypes } from './jscache/icons-types'
import { iconsMetadata } from '@/jscache/icons-metadata'
export type { Icons } from './jscache/icons-names'
export type { IconsTypes } from './jscache/icons-types'

export declare interface IconMetadata {
  name: string
  version: number
  popularity: number
  codepoint: number
  categories: string[]
  tags: string[]
}

export declare interface MaterialIcons {
  readonly names: Icons;
  readonly types: IconsTypes;
  readonly metadata: IconMetadata[];
}

const materialIcons: MaterialIcons = {
  names: icons as Icons,
  types: iconsTypes as IconsTypes,
  metadata: iconsMetadata as IconMetadata[],
}

function useIcons (): MaterialIcons {
  return materialIcons as MaterialIcons
}
export default {
  MaterialIcon,
  useIcons,
  materialIcons,
  install: (app: App) => {
    app.config.globalProperties.$icons = materialIcons
    app.component('MaterialIcon', MaterialIcon)
  }
}

export {
  MaterialIcon,
  useIcons,
  materialIcons,
}
