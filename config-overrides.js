/* config-overrides.js */
const loaders = require("./config/loaders");

module.exports = function override(config, env) {
    // 添加 loaders
    config = loaders(config, env);

    return config;
};
