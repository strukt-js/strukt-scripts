const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  stories: (_, config) => [`${config.rootDir}/**/*.stories.@(js|mdx|tsx)`],
  addons: ['@storybook/addon-essentials'],

  managerWebpack: async (config) => {
    const webpackConfig = {
      ...config,
      plugins: [...config.plugins, new ProgressBarPlugin()],
    };

    return webpackConfig;
  },
};
