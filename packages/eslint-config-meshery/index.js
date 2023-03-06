module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "next", 
    "turbo", 
    "prettier"
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    '@typescript-eslint/naming-convention': 'warn',
		'import/no-unresolved': 'error',
		'import/order': [
			'error',
			{
				groups: [
					'builtin', // Built-in imports (come from NodeJS native) go first
					'external', // <- External imports
					'internal', // <- Absolute imports
					['sibling', 'parent'], // <- Relative imports, the sibling and parent types they can be mingled together
					'index', // <- index imports
					'unknown', // <- unknown
				],
				'newlines-between': 'always',
				alphabetize: {
					/* sort in ascending order. Options: ["ignore", "asc", "desc"] */
					order: 'asc',
					/* ignore case. Options: [true, false] */
					caseInsensitive: true,
				},
			},
		],
		'sort-imports': [
			'error',
			{
				ignoreCase: false,
				ignoreDeclarationSort: true, // don"t want to sort import lines, use eslint-plugin-import instead
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
				allowSeparatedGroups: true,
			},
		],
  },
  parserOptions: {
    babelOptions: {
      // presets: [require.resolve("next/babel")],
    },
  },
};
