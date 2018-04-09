const path = require("path");
const { getLoader, loaderNameMatches } = require("react-app-rewired");

const stylusExtension = /\.styl$/;
const stylusModuleExtension = /\.module.styl$/;

function createRewirestylus(stylusLoaderOptions = {}) {
	return function(config, env) {
		// Exclude all stylus files (including module files) from file-loader
		const fileLoader = getLoader(config.module.rules, rule => {
			return loaderNameMatches(rule, "file-loader") && rule.exclude;
		});
		fileLoader.exclude.push(stylusExtension);

		const createRule = (rule, cssRules) => {
			if (!cssRules) return rule;
			if (cssRules.loader) {
				return {
					...rule,
					loader: [
						...cssRules.loader,
						{ loader: "stylus-loader", options: stylusLoaderOptions }
					]
				};
			} else {
				return {
					...rule,
					use: [
						...cssRules.use,
						{ loader: "stylus-loader", options: stylusLoaderOptions }
					]
				};
			}
		};

		const stylusRules = createRule(
			{
				test: stylusExtension,
				exclude: stylusModuleExtension
			},
			// Get a copy of the CSS loader
			getLoader(
				config.module.rules,
				rule => String(rule.test) === String(/\.css$/)
			)
		);

		const stylusModuleRules = createRule(
			{ test: stylusModuleExtension },
			// Get a copy of the CSS module loader
			getLoader(
				config.module.rules,
				rule => String(rule.test) === String(/\.module\.css$/)
			)
		);

		const oneOfRule = config.module.rules.find(
			rule => rule.oneOf !== undefined
		);
		if (oneOfRule) {
			oneOfRule.oneOf.unshift(stylusRules);
			oneOfRule.oneOf.unshift(stylusModuleRules);
		} else {
			// Fallback to previous behaviour of adding to the end of the rules list.
			config.module.rules.push(stylusRules);
			config.module.rules.push(stylusModuleRules);
		}

		return config;
	};
}

const rewirestylus = createRewirestylus();

rewirestylus.withLoaderOptions = createRewirestylus;

module.exports = rewirestylus;
