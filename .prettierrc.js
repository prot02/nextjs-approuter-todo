module.exports = {
	printWidth: 100,
	singleQuote: true,
	trailingComma: 'es5',
	semi: true,
	tabWidth: 2,
	useTabs: true,
	embeddedLanguageFormatting: 'off',

	overrides: [
		{
			files: ['**/*.css', '**/*.scss', '**/*.html'],
			options: {
				singleQuote: false,
			},
		},
	],
};
