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
				primary: '#2196f3',
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
					// '00': '#F7F5F4',
					// '01': '#F3F3F3',
					// '02': '#707070',
					// '04': '#ECECEC',
					// '05': '#A3A3A3',
					// '06': '#F8F8F8',
					// '07': '#8F8F8F',
				},
				red: {
					'01': '#FD4E4E',
				},
			},
			fontSize: {
				'xs': '10px',
				's': '12px',
				'm': '14px',
				'l': '16px',
				'xl': '20px',
				'2xl': '24px',
				'3xl': '28px',
			},
		},
	},
	plugins: [],
};
export default config;
