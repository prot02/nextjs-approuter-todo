import 'src/style/globals.css';
import { notoSansJP } from '@/style/fonts';
import classNames from 'classNames';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={classNames(notoSansJP.variable)}>
				<main>{children}</main>
			</body>
		</html>
	);
}
