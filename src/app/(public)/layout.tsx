'use client';
import { useAuthStore } from '@/stores';
import { useAuthCheck, usePublicRedirect } from '@/hooks';
import { Spinner } from '@/components/ui-parts';

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	useAuthCheck();
	usePublicRedirect();

	const isLoading = useAuthStore((state) => state.isLoading());

	return (
		<div>
			{isLoading ? (
				<div className="h-screen flex items-center justify-center">
					<Spinner className="w-[48px]" />
				</div>
			) : (
				children
			)}
		</div>
	);
}
