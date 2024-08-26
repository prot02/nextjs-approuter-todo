import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/features/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				custom: {
					primary: '#2196f3',
					white: {
						'01': '#fff',
					},
					black: {
						'01': '#000',
						'02': '#242424',
					},
					gray: {
						'01': '#f5f8fa', // 背景
						'02': '#CDCDCD', // ボーダー
						'03': '#707070', // 文字
						'04': '#ECECEC',
						// '04': '#F7F5F4',
						// '04': '#F3F3F3',
						// '04': '#A3A3A3',
						// '04': '#F8F8F8',
						// '04': '#8F8F8F',
					},
					red: {
						'01': '#FD4E4E',
					},
				},
			},
			fontSize: {
				xs: '10px',
				s: '12px',
				m: '14px',
				l: '16px',
				// xl: '20px',
				// '2xl': '24px',
				// '3xl': '28px',
				xl: '18px',
				'2xl': '20px',
				'3xl': '24px',
				'4xl': '28px',
			},
		},
	},
	plugins: [],
	important: true,
};
export default config;
