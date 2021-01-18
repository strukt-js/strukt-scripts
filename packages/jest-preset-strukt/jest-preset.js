const babelConfig = require('@strukt-js/babel-preset-strukt');

module.exports = {
  testRunner: 'jest-circus/runner',
  testPathIgnorePatterns: ['/node_modules', '/dist/'],
  collectCoverageFrom: ['<rootDir>/src/**/*.js'],
  modulePaths: ['<rootDir>/src'],
  errorOnDeprecated: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: {
    global: {
      statements: 95,
      branches: 95,
      lines: 95,
      functions: 95,
    },
  },
  transform: { '\\.[jt]sx?$': ['babel-jest', { ...babelConfig }] },
};
