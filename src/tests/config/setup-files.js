import { config } from '@vue/test-utils'
import translations from '@/translations/locales/en.json'

config.global.mocks = {
  $t: (msg) => translations[msg],
}
