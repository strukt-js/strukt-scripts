import eslintConfig from '@strukt-js/eslint-config-strukt';
import jestConfig from '@strukt-js/jest-preset-strukt';
import babelConfig from '@strukt-js/babel-preset-strukt';
import storybookConfig from '@strukt-js/storybook-preset-strukt';

export const banner = `
███████╗████████╗██████╗ ██╗   ██╗██╗  ██╗████████╗
██╔════╝╚══██╔══╝██╔══██╗██║   ██║██║ ██╔╝╚══██╔══╝
███████╗   ██║   ██████╔╝██║   ██║█████╔╝    ██║
╚════██║   ██║   ██╔══██╗██║   ██║██╔═██╗    ██║
███████║   ██║   ██║  ██║╚██████╔╝██║  ██╗   ██║
╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝
`;

export const eslintPreset = {
  name: '@strukt-js/eslint-config-strukt',
  config: eslintConfig,
};

export const jestPreset = {
  name: '@strukt-js/jest-preset-strukt',
  config: jestConfig,
};

export const babelPreset = {
  name: '@strukt-js/babel-preset-strukt',
  config: babelConfig,
};

export const storyBookPreset = {
  name: '@strukt-js/storybook-preset-strukt',
  config: storybookConfig,
};
