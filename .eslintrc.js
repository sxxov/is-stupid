module.exports = {
	overrides: [
		{
			files: ['**/*.d.ts'],
			rules: {
				'@typescript-eslint/no-unused-vars': ['off'],
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 11,
	},
	env: {
		node: true,
		browser: true,
	},
	rules: {
		'no-param-reassign': ['off'],
		'import/no-unresolved': ['off'],
		'lines-between-class-members': ['off'],
		'no-multiple-empty-lines': ['warn', { max: 2 }],
		'import/no-mutable-exports': ['off'],
		'import/first': ['off'],
		'@typescript-eslint/no-empty-function': ['off'],
		'@typescript-eslint/no-use-before-define': ['off'],
		'@typescript-eslint/no-explicit-any': ['off'],
		'@typescript-eslint/no-this-alias': ['off'],
		'max-classes-per-file': ['off'],
		'@typescript-eslint/ban-ts-comment': ['off'],
		'no-tabs': ['off'],
		'linebreak-style': ['warn', 'windows'],
		'no-underscore-dangle': ['off'],
		'no-plusplus': ['off'],
		'no-console': ['off'],
		'no-new': ['off'],
		'no-use-before-define': ['off'],
		'no-continue': ['off'],
		'import/prefer-default-export': ['off'],
		'import/extensions': [
			'warn',
			'never',
			{
				json: 'always',
				css: 'always',
				utility: 'always',
				error: 'always',
				type: 'always',
				svelte: 'always',
				types: 'always',
				animator: 'always',
				object: 'always',
				factory: 'always',
				factories: 'always',
			},
		],
		'no-await-in-loop': ['off'],

		// kinda prettier
		'array-bracket-newline': [
			'warn',
			{
				multiline: true,
				minItems: 3,
			},
		],
		'array-element-newline': [
			'warn',
			{
				multiline: true,
				minItems: 3,
			},
		],
		'multiline-ternary': ['warn', 'always-multiline'],
		'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: false }],
		'function-paren-newline': ['warn', 'multiline-arguments'],
		'object-curly-newline': [
			'warn',
			{
				consistent: true,
				minProperties: 2,
			},
		],
		'padding-line-between-statements': [
			'warn',
			// Always require blank lines after directive (like 'use-strict'), except between directives
			{
				blankLine: 'always',
				prev: 'directive',
				next: '*',
			},
			{
				blankLine: 'any',
				prev: 'directive',
				next: 'directive',
			},
			// Always require blank lines after import, except between imports
			{
				blankLine: 'always',
				prev: 'import',
				next: '*',
			},
			{
				blankLine: 'any',
				prev: 'import',
				next: 'import',
			},
			// Always require blank lines before & after every sequence of variable declarations & export
			{
				blankLine: 'always',
				prev: '*',
				next: [
					'const',
					'let',
					'var',
					'export',
				],
			},
			{
				blankLine: 'always',
				prev: [
					'const',
					'let',
					'var',
					'export',
				],
				next: '*',
			},
			{
				blankLine: 'any',
				prev: [
					'const',
					'let',
					'var',
					'export',
				],
				next: [
					'const',
					'let',
					'var',
					'export',
				],
			},
			// Always require blank lines before and after class declaration, if, do/while, switch, try
			{
				blankLine: 'always',
				prev: '*',
				next: [
					'if',
					'class',
					'for',
					'do',
					'while',
					'switch',
					'try',
				],
			},
			{
				blankLine: 'always',
				prev: [
					'if',
					'class',
					'for',
					'do',
					'while',
					'switch',
					'try',
				],
				next: '*',
			},
			// Always require blank lines before return statements
			{
				blankLine: 'always',
				prev: '*',
				next: 'return',
			},
		],
		'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 2 }],
		// xo-typescript
		'@typescript-eslint/adjacent-overload-signatures': ['warn'],
		'@typescript-eslint/ban-types': [
			'warn',
			{
				extendDefaults: true,
				types: {
					String: {
						message: 'Use `string` instead.',
						fixWith: 'string',
					},
					Number: {
						message: 'Use `number` instead.',
						fixWith: 'number',
					},
					Boolean: {
						message: 'Use `boolean` instead.',
						fixWith: 'boolean',
					},
					Symbol: {
						message: 'Use `symbol` instead.',
						fixWith: 'symbol',
					},
					Object: {
						message: 'The `Object` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead. See https://github.com/typescript-eslint/typescript-eslint/pull/848',
						fixWith: 'Record<string, unknown>',
					},
					'{}': {
						message: 'The `{}` type is mostly the same as `unknown`. You probably want `Record<string, unknown>` instead.',
						fixWith: 'Record<string, unknown>',
					},
					object: {
						message: 'The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848',
						fixWith: 'Record<string, unknown>',
					},
					Function: 'Use a specific function type instead, like `() => void`.',

					'[]': 'Don\'t use the empty array type `[]`. It only allows empty arrays. Use `SomeType[]` instead.',
					'[[]]': 'Don\'t use `[[]]`. It only allows an array with a single element which is an empty array. Use `SomeType[][]` instead.',
					'[[[]]]': 'Don\'t use `[[[]]]`. Use `SomeType[][][]` instead.',
					'[[[[]]]]': 'ur drunk 🤡',
					'[[[[[]]]]]': '🦄💥',
					Omit: 'Prefer the `Except` type in the `type-fest` package instead as it\'s stricter.',
				},
			},
		],
		'@typescript-eslint/brace-style': [
			'warn',
			'1tbs',
			{
				allowSingleLine: false,
			},
		],
		'comma-dangle': ['off'],
		'@typescript-eslint/comma-dangle': ['warn', 'always-multiline'],
		'default-param-last': ['off'],
		'@typescript-eslint/default-param-last': ['warn'],
		'func-call-spacing': ['off'],
		'@typescript-eslint/func-call-spacing': ['warn', 'never'],
		indent: ['off'],
		'@typescript-eslint/indent': [
			'warn',
			'tab',
			{
				SwitchCase: 1,
			},
		],
		'keyword-spacing': ['off'],
		'@typescript-eslint/keyword-spacing': ['warn'],
		'@typescript-eslint/member-delimiter-style': [
			'warn',
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true,
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false,
				},
			},
		],
		'no-extra-semi': ['off'],
		'@typescript-eslint/no-extra-semi': ['warn'],
		'no-loop-func': ['off'],
		'@typescript-eslint/no-loop-func': ['warn'],
		'no-loss-of-precision': ['off'],
		'@typescript-eslint/no-loss-of-precision': ['warn'],
		'@typescript-eslint/no-extraneous-class': [
			'warn',
			{
				allowConstructorOnly: false,
				allowEmpty: false,
				// allowStaticOnly: false,
				allowStaticOnly: true,
				allowWithDecorator: true,
			},
		],
		'no-void': [
			'warn',
			{
				// To allow `ignoreVoid` in `@typescript-eslint/no-floating-promises`
				allowAsStatement: true,
			},
		],
		'@typescript-eslint/no-inferrable-types': ['warn'],
		'no-throw-literal': ['off'],
		'@typescript-eslint/no-unnecessary-type-constraint': ['warn'],
		'no-useless-constructor': ['off'],
		'@typescript-eslint/no-useless-constructor': ['warn'],
		'@typescript-eslint/no-var-requires': ['warn'],
		'@typescript-eslint/prefer-as-const': ['warn'],
		'@typescript-eslint/prefer-function-type': ['warn'],
		'@typescript-eslint/prefer-literal-enum-member': ['warn'],
		'@typescript-eslint/prefer-namespace-keyword': ['warn'],
		'@typescript-eslint/prefer-optional-chain': ['warn'],
		'@typescript-eslint/prefer-ts-expect-error': ['warn'],
		quotes: ['off'],
		'@typescript-eslint/quotes': ['warn', 'single'],
		'space-before-function-paren': ['off'],
		'@typescript-eslint/space-before-function-paren': [
			'warn',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		'space-infix-ops': ['off'],
		'@typescript-eslint/space-infix-ops': ['warn'],
		semi: ['off'],
		'@typescript-eslint/semi': ['warn', 'always'],
		'@typescript-eslint/triple-slash-reference': [
			'warn',
			{
				path: 'never',
			},
		],
		'@typescript-eslint/type-annotation-spacing': ['warn'],
		'@typescript-eslint/unified-signatures': ['warn'],
		'no-redeclare': ['off'],
		'no-undef': ['off'],

		// ts has their own implementation that works
		'no-unused-vars': ['off'],
		'consistent-return': ['off'],
		// interferes with TS
		'no-shadow': ['off'],

		'@typescript-eslint/no-non-null-assertion': ['off'],

		'class-methods-use-this': ['off'],
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'airbnb-base',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
};
