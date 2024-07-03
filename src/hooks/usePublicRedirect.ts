import { useEffect } from 'react';
import { useAuthStore } from '@/stores';
import { useRouter } from 'next/navigation';
import { ProtectedHomePage } from '@/constants/config'

export const usePublicRedirect = () => {
	const router = useRouter();
	const isSignin = useAuthStore((state) => state.isSignin());

	useEffect(() => {
		if (isSignin) {
			router.push(ProtectedHomePage);
		}
	}, [isSignin, router]);
};
