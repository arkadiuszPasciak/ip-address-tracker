module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  testMatch: ['<rootDir>/src/tests/unit/**/*.spec.(js|jsx|ts|tsx)'],
  setupFiles: ['<rootDir>/src/tests/config/setup-files.js'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/config/setup-files-after-env.js'],
}
