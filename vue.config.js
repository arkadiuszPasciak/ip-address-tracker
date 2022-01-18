module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import '~@/assets/styles/utils/_media.scss';
          @import '~@/assets/styles/utils/_hover.scss';
          @import '~@/assets/styles/variables/_colors.scss';
          @import '~@/assets/styles/variables/_fonts.scss';
          @import '~@/assets/styles/general/_fonts.scss';
        `,
      },
    },
  },
  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'IP Address Tracker',
      description: 'Find your location with using IP and check on map',
      language: 'en',
    },
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
}
