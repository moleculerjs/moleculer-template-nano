const js = require("@eslint/js");

module.exports = [
	js.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "commonjs",
			globals: {
				process: "readonly",
				console: "readonly",
				module: "readonly",
				require: "readonly",
				__dirname: "readonly",
				__filename: "readonly",
				exports: "writable",
				Buffer: "readonly",
				setTimeout: "readonly",
				clearTimeout: "readonly",
				setInterval: "readonly",
				clearInterval: "readonly",
				Promise: "readonly"
			}
		},
		rules: {
			"indent": ["warn", "tab", { "SwitchCase": 1 }],
			"quotes": ["warn", "double"],
			"semi": ["error", "always"],
			"no-var": ["error"],
			"no-console": ["off"],
			"no-unused-vars": ["warn"],
			"no-mixed-spaces-and-tabs": ["warn"]
		}
	}
];
