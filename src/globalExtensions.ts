import { HelloPlugin } from '@/index'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $hello: HelloPlugin
  }
}
