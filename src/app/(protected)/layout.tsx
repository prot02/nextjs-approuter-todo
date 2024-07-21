'use client';
import { Header } from '@/features/common';
import { useAuthSet } from '@/hooks';
import { useAuthStore } from '@/stores';
import { Spinner } from '@/components/ui-parts';

export default function ProtectedLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const auth = useAuthStore((state) => state.auth);
	useAuthSet();
	return (
		<>
			{auth ? (
				<>
					<Header />
					<div className="p-[20px]">{children}</div>
				</>
			) : (
				<div className="h-screen flex items-center justify-center">
					<Spinner className="w-[48px]" />
				</div>
			)}
		</>
	);
}
