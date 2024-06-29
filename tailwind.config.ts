import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				white: {
					'01': '#fff',
				},
				black: {
					'01': '#000',
					'02': '#242424',
				},
				gray: {
					'01': '#f5f8fa',
					'02': '#CDCDCD',
				},
				red: {
					'01': '#FD4E4E',
				},
				blue: {
					'01': '#0b6efd',
				},
			},
			fontSize: {
				"s": '10px',
				"m": '12px',
				"l": '16px',
				"xl": '20px',
				"2xl": '24px',
				"3xl": '28px',
			},
		},
	},
	plugins: [],
};
export default config;
