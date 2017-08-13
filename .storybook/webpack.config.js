const path = require('path');

module.exports = (storybookBaseConfig, configType) => {
  if (configType === 'PRODUCTION') {
    // see https://github.com/storybooks/storybook/issues/1570
    storybookBaseConfig.plugins = storybookBaseConfig.plugins.filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin')
  }

  return storybookBaseConfig;
};