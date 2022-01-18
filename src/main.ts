import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import i18n from '@/translations/config/i18n'

require('@/assets/styles/general/_reset.scss')
require('@/assets/styles/general/_base.scss')

createApp(App).use(i18n).use(store).mount('#app')
