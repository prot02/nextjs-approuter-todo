module.exports = {
	root: true, // プロジェクトのルートに配置していると教えている
	env: {
		es2020: true,
		node: true,
	},
	parser: '@typescript-eslint/parser', // ESLintにTypeScriptを適応
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.eslint.json'],
	},
	plugins: ['@typescript-eslint'], // TypeScriptプラグインのルールを適用
	extends: [
		'plugin:@typescript-eslint/recommended', // 型チェックが不要なルールを適用
		'next/core-web-vitals',
		'prettier',
		// "prettier/@typescript-eslint", // Prettierでカバーできるルールを無効化
	],
	rules: {},
};
