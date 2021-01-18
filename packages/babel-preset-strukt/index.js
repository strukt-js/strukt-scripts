module.exports = {
  presets: [
    ['@babel/preset-env', { targets: 'last 1 chrome version' }],
    ['@babel/preset-typescript']
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-top-level-await',
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
  ],
  exclude: 'node_modules/**',
};
