module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  testMatch: ['<rootDir>/src/tests/unit/**/*.spec.(js|jsx|ts|tsx)'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/config/files-after-env.js'],
}
