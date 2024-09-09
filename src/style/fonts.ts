import { Noto_Sans_JP } from 'next/font/google';

const notoSansJP = Noto_Sans_JP({
	subsets: ['latin'], // どの言語でサブセットするか
	weight: ['400', '700'],
	variable: '--font-notoSansJP',
	display: 'swap', // フォントが読み込まれるまではシステムフォントを表示
});

export { notoSansJP };
