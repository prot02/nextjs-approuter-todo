import { useAuthStore } from '@/stores';
import { useEffect } from 'react';

export const useAuthUnset = () => {
	const storeUnsetAuth = useAuthStore((state) => state.unsetAuth);
	useEffect(() => {
		storeUnsetAuth();
	}, [storeUnsetAuth]);
};
