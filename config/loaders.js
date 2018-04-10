const rewireTypescript = require("react-app-rewire-typescript");
const rewirestylus = require("./stylus");
const { compose } = require('react-app-rewired');

module.exports = (config, env) => {
  return compose(rewirestylus, rewireTypescript)(config, env);
};
