import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'プロフィール',
	description: 'プロフィール',
};

export default function BoardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <>{children}</>;
}
