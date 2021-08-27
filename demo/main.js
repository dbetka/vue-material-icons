import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import '../dist/vue-material-icons.css'
import { materialIcons } from '../'

createApp(App)
  .use(materialIcons)
  .mount('#app')
