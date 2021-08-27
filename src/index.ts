import './style/index.scss'
import Menu from './components/Menu.vue'
import { App } from 'vue'

export declare interface HelloPlugin {
  sayHello(text: string): string;
  install(app: App): void;
}

const hello: HelloPlugin = {
  sayHello (name) {
    return `Hello ${name}`
  },
  install (app) {
    app.config.globalProperties.$hello = this
  },
}

export {
  Menu,
  hello,
}
