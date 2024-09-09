import 'src/style/globals.css';
import { notoSansJP } from '@/style/fonts';
import classNames from 'classnames';
import { ToastProvider, TanstackProvider } from 'src/features/common';
import { Metadata } from 'next';

export const metadata: Metadata = {
	robots: {
		index: false,
		follow: false,
		googleBot: {
			index: false,
			follow: false,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={classNames(notoSansJP.variable)}>
				<TanstackProvider>
					<ToastProvider>
						<main>{children}</main>
					</ToastProvider>
				</TanstackProvider>
			</body>
		</html>
	);
}
