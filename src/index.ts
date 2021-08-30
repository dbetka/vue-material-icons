import './style/index.sass'
import { AIcon } from './components/icon'
import { App, inject } from 'vue'
import { icons, Icons } from 'jscache/icons-names'
import { iconsTypes, IconsTypes } from 'jscache/icons-types'
import { iconsKey } from '@/injectionSymbols'
// export type { AIconProps } from './components/icon'
// export type { Icons } from 'jscache/icons-names'
// export type { IconsTypes } from 'jscache/icons-types'

export declare interface MaterialIcons {
  readonly names: Icons;
  readonly types: IconsTypes;
  install(app: App): void;
}

const materialIcons: MaterialIcons = {
  names: icons,
  types: iconsTypes,
  install (app: App) {
    app.config.globalProperties.$icons = this
    app.component('AIcon', AIcon)
    app.provide(iconsKey, this)
  },
}

function useIcons (): MaterialIcons {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return inject(iconsKey)!
}

export {
  AIcon,
  useIcons,
  materialIcons,
}
