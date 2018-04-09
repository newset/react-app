const { getBabelLoader } = require("react-app-rewired");

const getArray = source => {
	if (!source) {
		return [];
	}

	return Array.isArray(source) ? source : [source];
};

exports.include = (config, ...includes) => {
	const babel_loader = getBabelLoader(config.module.rules);

	const include_config = getArray(babel_loader.include);

	includes = includes.reduce((accumulator, include) => {
		if (Array.isArray(include)) {
			return accumulator.concat(include);
		}

		accumulator.push(include);
		return accumulator;
	}, include_config);

	babel_loader.include = includes;

	return config;
};

exports.exclude = (config, ...excludes) => {
	const babel_loader = getBabelLoader(config.module.rules);

	const exclude_config = getArray(babel_loader.exclude);

	excludes = excludes.reduce((accumulator, exclude) => {
		if (Array.isArray(exclude)) {
			return accumulator.concat(exclude);
		}

		accumulator.push(exclude);
		return accumulator;
	}, exclude_config);

	babel_loader.exclude = excludes;

	return config;
};
