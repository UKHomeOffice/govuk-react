const { webpack: workspaceAliases } = require('workspace-alias');

module.exports = {
  stories: [
    '../../../packages/example-application/src/**/stories.js',
    '../../../components/*/src/**/stories.js',
    '../../../packages/hoc/src/**/stories.js',
    '../../../packages/icons/src/**/stories.js',
  ],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs', '@storybook/addon-docs'],
  webpackFinal: async (config) => {
    config.resolve.alias = workspaceAliases();
    return config;
  },
};
