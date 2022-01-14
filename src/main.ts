import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

require('@/assets/styles/general/_reset.scss')
require('@/assets/styles/general/_base.scss')

createApp(App).use(store).mount('#app')
