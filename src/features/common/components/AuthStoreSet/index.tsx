'use client';
import { FCX } from 'react';
import { useAuthSet } from './hook';
import { useAuthStore } from '@/stores';
import { Spinner } from '@/components/ui-parts';

const AuthStoreSet: FCX = ({ children }) => {
	const auth = useAuthStore((state) => state.auth);
	useAuthSet();

	return (
		<>
			{auth ? (
				children
			) : (
				<div className="h-screen flex items-center justify-center">
					<Spinner className="w-[48px]" />
				</div>
			)}
		</>
	);
};
export default AuthStoreSet;
