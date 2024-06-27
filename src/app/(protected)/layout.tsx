'use client';
import { useAuthStore } from '@/stores';
import { useAuthCheck, useProtectedRedirect } from '@/hooks';

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	useAuthCheck();
	useProtectedRedirect();
	const isLoading = useAuthStore((state) => state.isLoading());

	return <div>{isLoading ? <div>ロード</div> : children}</div>;
}
