import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['**/*.{js,mjs,cjs,ts}'] },
	{
		languageOptions: { globals: globals.browser },
		rules: {
			'import/no-commonjs': 'off',
			'import/prefer-default-export': 'off',
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
];
