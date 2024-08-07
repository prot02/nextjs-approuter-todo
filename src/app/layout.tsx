import 'src/style/globals.css';
import { notoSansJP } from '@/style/fonts';
import classNames from 'classnames';
import { ToastProvider } from 'src/components/ui-elements';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={classNames(notoSansJP.variable)}>
				<ToastProvider>
					<main>{children}</main>
				</ToastProvider>
			</body>
		</html>
	);
}
