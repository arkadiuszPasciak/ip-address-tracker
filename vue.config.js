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
};
