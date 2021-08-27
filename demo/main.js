import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { hello } from '../src/index'

createApp(App)
  .use(hello)
  .mount('#app')
