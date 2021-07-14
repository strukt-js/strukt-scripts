const babelPresetStrukt = require('@strukt-js/babel-preset-strukt');
const prettierConfig = require('@strukt-js/prettier-config-strukt');

const javascriptConfig = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: babelPresetStrukt(),
  },
  files: '**.js',
  plugins: ['@babel', 'import', 'jest', 'prettier'],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'prettier',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      { ...prettierConfig },
      {
        usePrettierrc: false,
      },
    ],
  },
};

const typescriptConfig = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    requireConfigFile: false,
  },
  files: '**/*.{ts,tsx}',
  plugins: ['@typescript-eslint', 'import', 'jest', 'prettier'],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'prettier',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      { ...prettierConfig },
      {
        usePrettierrc: false,
      },
    ],
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
    jest: true,
    node: true,
    'jest/globals': true,
  },
  reportUnusedDisableDirectives: true,
  overrides: [{ ...javascriptConfig }, { ...typescriptConfig }],
};
