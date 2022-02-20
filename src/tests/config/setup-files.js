import { config } from '@vue/test-utils'
import translations from '@/translations/locales/en.json'
import { maska } from 'maska'

config.global.mocks = {
  $t: (msg) => translations[msg],
}

config.global.directives = {
  Maska: maska,
}
