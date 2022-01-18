import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n'

/**
 * This function is reponsible for create translation keys.
 * @returns Sorted translations for languages.
 */
function loadLocaleTranslations(): LocaleMessages<VueMessageType> {
  const locales = require.context('../locales/', true, /.json$/)

  const messages: LocaleMessages<VueMessageType> = {}

  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)

    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })

  return messages
}

export default createI18n({
  legacy: false,
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  globalInjection: true,
  messages: loadLocaleTranslations(),
})
