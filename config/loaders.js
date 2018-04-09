const rewireTypescript = require("react-app-rewire-typescript");
const rewirestylus = require("./stylus");

module.exports = (config, env) => {
	// typescript
	config = rewireTypescript(config, env);
	// stylus
	config = rewirestylus(config, env);
	// babel

	return config;
};
