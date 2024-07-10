import { useEffect } from 'react';
import { useAuthStore } from '@/stores';
import { useRouter } from 'next/navigation';
import { PublicHomePage } from '@/constants/config';

export const useProtectedRedirect = () => {
	const router = useRouter();
	const isSignout = useAuthStore((state) => state.isSignout());

	useEffect(() => {
		if (isSignout) {
			router.push(PublicHomePage);
		}
	}, [isSignout, router]);
};
