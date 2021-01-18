const babelPresetStrukt = require('@strukt-js/babel-preset-strukt');

const javascriptConfig = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      ...babelPresetStrukt,
    },
  },
  files: '**.js',
  plugins: ['@babel', 'import', 'jest'],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
};

const typescriptConfig = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    requireConfigFile: false,
  },
  files: '**.ts',
  plugins: ['@typescript-eslint', 'import', 'jest'],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
      },
    ],
  },
};

module.exports = {
  root: true,
  env: {
    browser: true,
    worker: true,
    serviceworker: true,
    es2021: true,
  },
  reportUnusedDisableDirectives: true,
  overrides: [{ ...javascriptConfig }, { ...typescriptConfig }],
};
