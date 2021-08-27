import { MaterialIcons } from '@/index'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $icons: MaterialIcons
  }
}
