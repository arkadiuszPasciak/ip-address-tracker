import { createApp } from 'vue'
import App from '@/App.vue'
import store from '@/store/index'
import i18n from '@/translations/config/i18n'
import Maska from 'maska'

require('@/assets/styles/general/_reset.scss')
require('@/assets/styles/general/_base.scss')

createApp(App).use(store).use(i18n).use(Maska).mount('#app')
