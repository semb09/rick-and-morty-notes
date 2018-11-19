const rewireEslint = require('react-app-rewire-eslint');

const overrideEslintOptions = (options) => {
  const newOptions = options;
  newOptions.emitWarning = true;
  return newOptions;
};

module.exports = (config, env) => rewireEslint(config, env, overrideEslintOptions);
