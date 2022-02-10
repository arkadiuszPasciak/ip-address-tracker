/* eslint-disable no-undef */

global.console = {
  ...console,
  log: jest.fn(),
  debug: jest.fn(),
  warn: jest.fn(),
}
