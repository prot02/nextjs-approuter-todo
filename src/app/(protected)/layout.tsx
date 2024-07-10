'use client';
import { useAuthStore } from '@/stores';
import { useAuthCheck, useProtectedRedirect } from '@/hooks';
import { Spinner } from '@/components/ui-parts';
import { Header } from '@/features/common';

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	useAuthCheck();
	useProtectedRedirect();
	const isLoading = useAuthStore((state) => state.isLoading());

	return (
		<div>
			{isLoading ? (
				<div className="h-screen flex items-center justify-center">
					<Spinner className="w-[48px]" />
				</div>
			) : (
				<div>
					<Header />
					<div className="p-[20px]">{children}</div>
				</div>
			)}
		</div>
	);
}
