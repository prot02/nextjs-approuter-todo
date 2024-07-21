'use client';
import { useAuthUnset } from '@/hooks';

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	useAuthUnset();
	return <div>{children}</div>;
}
